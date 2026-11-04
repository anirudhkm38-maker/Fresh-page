import "@/App.css";
import { MotionProvider } from "@/context/MotionContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Reset from "@/components/Reset";
import SeeItInAction from "@/components/SeeItInAction";
import VoiceHelp from "@/components/VoiceHelp";
import Timeline from "@/components/Timeline";
import NextIdeas from "@/components/NextIdeas";
import HowBuilt from "@/components/HowBuilt";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
    return (
        <MotionProvider>
            <ErrorBoundary>
                <div className="min-h-screen bg-cream text-moss overflow-x-clip">
                    <Navbar />
                    <main>
                        <Hero />
                        <Marquee />
                        <Story />
                        <Reset />
                        <SeeItInAction />
                        <VoiceHelp />
                        <Timeline />
                        <NextIdeas />
                        <HowBuilt />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </ErrorBoundary>
        </MotionProvider>
    );
}
