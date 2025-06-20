import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex">
                        <Link href="/" className="text-xl font-bold text-gray-800">
                            Home
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
