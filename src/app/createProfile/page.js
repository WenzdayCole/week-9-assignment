export default function createProfilePage() {
    return (
        <>
        <h1>Create your profile</h1>,

        <form>
            <label htmlFor="first-name">First name: </label>
            <input type="text" name="first-name" id="first-name" required></input>
            <label htmlFor="last-name">Last name: </label>
            <input type="text" name="last-name" id="last-name"></input>
        </form>
        </>
    )
} 