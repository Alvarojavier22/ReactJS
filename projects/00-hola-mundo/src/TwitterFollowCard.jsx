export function TwitterFollowCard ({userName, name, isFollowing}) {
    return (
    <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar"
                alt="Alvaro" 
                src="https://avatars.githubusercontent.com/u/78930260?s=400&u=4af1f23021f8b0e8600b90c52b40e08571a08bdd&v=4" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span
                    className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                Seguir
                </button>
            </aside>
        </article>
    )
}