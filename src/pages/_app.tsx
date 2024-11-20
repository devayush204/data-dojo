import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/Sidebar";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<SidebarProvider>
			<RecoilRoot>
				<Head>
					<title>LeetClone</title>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.png' />
					<meta
						name='description'
						content='Web application that contains leetcode problems and video solutions'
					/>
				</Head>
				<ToastContainer />
				<div className="flex w-full">
					<div className="w-full">
						<AppSidebar />
					</div>
					<div className="w-full">
						<Component {...pageProps} />
					</div>
				</div>
			</RecoilRoot>
		</SidebarProvider>
	);
}
