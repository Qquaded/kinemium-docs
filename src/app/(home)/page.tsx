import { redirect } from 'next/navigation';

export default function HomePage() {
  // Automatically redirect the user to the documentation
  redirect('/docs');

  // Unreachable code below, left for structure in case the redirect is removed, 
  // with the theme background color and grid removed as requested.
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground min-h-screen px-8 py-10">
      <main className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Kinemium Docs</h1>
        
        {/* Welcome Text */}
        <div className="text-[15px] leading-relaxed space-y-4 mb-8">
          <p>
            Welcome to the official documentation of{' '}
            <a href="https://kinemium.ftp.sh/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 underline underline-offset-2">
              Kinemium Engine
            </a>
            , the free and open source Lua-based sandboxed game engine!
          </p>
          <p>
            You are being redirected to the documentation automatically...
          </p>
        </div>
      </main>
    </div>
  );
}
