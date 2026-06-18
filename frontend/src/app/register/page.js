import HeroSection from "@/components/auth/HeroSection";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen">
            <HeroSection />

            <section className="flex w-full items-center justify-center bg-stone-50 p-6 lg:w-1/2 lg:p-16">
                <RegisterForm />
            </section>
        </main>
    );
}