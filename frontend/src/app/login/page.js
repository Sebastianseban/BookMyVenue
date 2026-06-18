import LoginForm from "@/components/auth/LoginForm";
import HeroSection from "@/components/auth/HeroSection";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      <HeroSection />

      <section className="flex w-full items-center justify-center bg-stone-50 p-6 lg:w-1/2 lg:p-16">
        <LoginForm />
      </section>
    </main>
  );
}