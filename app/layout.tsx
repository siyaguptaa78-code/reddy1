import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
 metadataBase: new URL("https://reddynow.com"),
 applicationName: "Reddy Anna Book",
 title: "Mahadev Book Official Website | ID & Account Information Guide",
 description:
 "Explore Mahadev Book information, online ID guidance, sports and gaming resources, account help, and frequently asked questions.",
 keywords: [
 "Reddy Anna",
 "Reddy Anna Book",
 "Reddy Anna ID",
 "Cricket ID",
 "IPL ID",
 "Online ID",
 "Best Id Provider"
 ],
 authors: [{ name: "Reddy Anna Book" }],
 creator: "Reddy Anna Book",
 publisher: "Reddy Anna Book",
 alternates: {
    canonical: "https://reddynow.com",
 },
 openGraph: {
 title: "Mahadev Book Official Website | ID & Account Information Guide",
 description:
 "Explore Mahadev Book information, online ID guidance, sports and gaming resources, account help, and frequently asked questions.",
    url: "https://reddynow.com",
 siteName: "Reddy Anna Book",
 images: [
 {
        url: "https://reddynow.com/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
 width: 800,
 height: 600,
 alt: "Reddy Anna Book Cricket Background"
 }
 ],
 locale: "en_US",
 type: "website"
 },
 twitter: {
 card: "summary_large_image",
 title: "Mahadev Book Official Website | ID & Account Information Guide",
 description:
 "Explore Mahadev Book information, online ID guidance, sports and gaming resources, account help, and frequently asked questions.",
 images: [
 "https://reddynow.com/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp"
 ]
 },
 verification: {
 google: "N85gFpQeZMUWZnN2y13W9dkgHN6VAkq1O_3a4HfHwt8",
 },
 icons: {
 icon: [
 {
        url: "/favicon-32x32.png",
 sizes: "32x32",
 type: "image/png"
 },
 {
        url: "/favicon-192x192.png",
 sizes: "192x192",
 type: "image/png"
 }
 ],
 apple: [
 {
        url: "/favicon-192x192.png"
 }
 ]
 }
};

export default function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en-US">
 <body className="min-h-screen bg-[#05080f] text-gray-200 antialiased flex flex-col justify-between">
 <Script
 id="gtm-script"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{
 __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXD7FFNS');`
 }}
 />
 <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
 rel="stylesheet"
 />
 <Script
 id="schema-org"
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "WebSite",
 "@id": "https://reddynow.com/#website",
 "url": "https://reddynow.com/",
 "name": "Reddy Anna",
 "inLanguage": "en"
 },
 {
 "@type": "Organization",
 "@id": "https://reddynow.com/#organization",
 "name": "Reddy Anna",
 "url": "https://reddynow.com/"
 },
 {
 "@type": "WebPage",
 "@id": "https://reddynow.com/#webpage",
 "url": "https://reddynow.com/",
 "name": "Reddy Anna Official ID & Book | reddynow.com",
 "description": "Explore Reddy Anna information, online ID guidance, sports and gaming resources, account help, and frequently asked questions.",
 "isPartOf": {
 "@id": "https://reddynow.com/#website"
 }
 },
 {
 "@type": "FAQPage",
 "@id": "https://reddynow.com/#faq",
 "url": "https://reddynow.com/",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "What is Reddy Anna?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Reddy Anna is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
 }
 },
 {
 "@type": "Question",
 "name": "How does a Reddy Anna ID work?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "An account ID is generally used to identify a user account. Refer to Reddy Anna's current account instructions and terms for the exact process."
 }
 },
 {
 "@type": "Question",
 "name": "How can I access the Reddy Anna website?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
 }
 },
 {
 "@type": "Question",
 "name": "What sports are available on Reddy Anna?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Available sports can change. Check the current sports or section on the website for the latest list and availability."
 }
 },
 {
 "@type": "Question",
 "name": "Does Reddy Anna provide live sports information?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
 }
 },
 {
 "@type": "Question",
 "name": "How can I get help with my Reddy Anna account?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
 }
 },
 {
 "@type": "Question",
 "name": "What payment options are supported?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
 }
 },
 {
 "@type": "Question",
 "name": "How can I check Reddy Anna login information?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
 }
 },
 {
 "@type": "Question",
 "name": "What should I do if I have a problem with my account?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
 }
 },
 {
 "@type": "Question",
 "name": "Where can I find the latest Reddy Anna updates?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
 }
 }
 ]
 }
 ]
 })
 }}
 />
 <noscript
 dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXD7FFNS" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
 }}
 />
 <Header />
 <main className="flex-1 w-full bg-[#05080f]">{children}</main>
 <Footer />
 <WhatsAppButton />
 <GoogleAnalytics gaId="G-6HEHNCLJQJ" />
 </body>
 </html>
 );
}
