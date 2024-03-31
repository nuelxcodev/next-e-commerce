import { auth, signOut } from "../src/auth"


async function SiginNav() {
    const session = await auth()

    return (
        <div>
            {
                session && session.user ? (
                    <div>

                        <form action={async () => {
                            await signOut
                        }}>
                            <button type="submit">signOut</button>
                        </form>
                    </div>)
                    : (<div>login</div>)
            }
        </div>
    )

}
export default SiginNav;