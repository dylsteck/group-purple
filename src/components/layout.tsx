import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";

interface LayoutProps {
    children: React.ReactNode;
}


export default function Layout ({ children }: LayoutProps){
    return(
        <>
        <GoogleAnalytics trackPageViews gaMeasurementId={process.env.GA_MEASUREMENT_ID} />
        <Head>
            <title>Group Purple</title>
        </Head>
        <main className="w-[100%] min-h-screen bg-[#8A63D2]">
            {children}
        </main>
        </>
    )
}