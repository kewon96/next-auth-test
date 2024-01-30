import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/options";
import {redirect} from "next/navigation";
import UserCard from "@/app/components/UserCard";

export default async function ServerPage() {
	const session = await getServerSession(options);

	debugger
	const [clientId] = options.providers;
	console.log(clientId)

	// if(!session) redirect('https://github.com/login/oauth/authorize?client_id=Iv1.8472279bf722feff');
	if(!session) redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);

	return (
		<section className={'flex flex-col gap-6'}>
			<UserCard user={session?.user} pagetype={'Server'} />
		</section>
	);
}
