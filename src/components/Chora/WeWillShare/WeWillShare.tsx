import "./WeWillShare.scss"

const ITEMS = [
    "Behind-the-scenes footage from shoots",
    "Green screen and VFX breakdowns",
    "Concept art and worldbuilding updates",
    "Team introductions",
    "Short-form videos exploring Chōra and each storyworld",
    "Teasers, trailers, and production updates",
    "Commentary tracks from creative leads",
    "Festival and screening announcements",
]

const WeWillShare = () => {
    return (
        <section className="we-will-share">
            <div className="we-will-share__inner">
                <h2 className="we-will-share__title">We will share</h2>
                <p className="we-will-share__lede">
                    The AuroraVision Anthology has already and will continue to be
                    supported by a strong social media and behind-the-scenes campaign,
                    giving audiences a clear view into the process of building the
                    project.
                </p>
                <ul className="we-will-share__list">
                    {ITEMS.map((item) => (
                        <li className="we-will-share__item" key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default WeWillShare
