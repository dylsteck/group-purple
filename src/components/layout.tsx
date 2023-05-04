import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
}


export default function Layout ({ children }: LayoutProps){
    return(
        <>
        <Head>
            <title>Group Purple</title>
        </Head>
        <main className="w-[100%] min-h-screen bg-[#8A63D2]">
            {children}
        </main>
        </>
    )
}