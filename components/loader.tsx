export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <img
                alt="logo"
                src="/logo.png" 
                />
            </div>
            <p className="text-sm text-muted-foreground">
                MindSphere is thinking...
            </p>
        </div>
    )
};