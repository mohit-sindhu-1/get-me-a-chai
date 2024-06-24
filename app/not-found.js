import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center gap-y-5">
                <h2 className="text-2xl font-bold">User not found</h2>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-300 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-300 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href='/'>Return Home</Link>
                </button>
            </div>


        </>
    )
}