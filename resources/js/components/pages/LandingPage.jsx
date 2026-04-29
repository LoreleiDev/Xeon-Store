export default function LandingPage() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to XeonStore</h1>
                <p className="text-gray-600 mb-6">Your one-stop shop for all your needs!</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Shop Now</button>
            </div>
        </div>
    );
}