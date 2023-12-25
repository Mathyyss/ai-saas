import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/dubscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat/index.mjs";


const configuration = {
    apiKey: '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',
};

const openai = new OpenAI(configuration);

const instructionMessage: CreateChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanation."
}

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI Key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired.", { status: 403});
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });
        
        if (!isPro) {
            await increaseApiLimit();
        }

        return NextResponse.json(response.choices[0].message);

    } catch (error) {
        console.log("[CODE ERROR]",error);
        return new NextResponse("Internal error", {status: 500});
    }
}