export default function SignInWithSlugs ({ params }: { params: { slug: string } }) {
    return <div className="text-white">signin::{params.slug}</div>
}