
import React from 'react';

export const LoginScreen: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <div className="text-center p-8 bg-black/20 backdrop-blur-md border border-white/20 rounded-lg shadow-xl animate-fade-in">
                <h1 className="text-4xl font-bold mb-2">Geo-Fence Pro</h1>
                <p className="text-lg text-gray-300 mb-8">Sign in with Google to manage your geo-fences.</p>
                <div id="signInDiv" className="flex justify-center"></div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
