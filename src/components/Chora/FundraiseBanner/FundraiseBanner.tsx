import { lazy, Suspense } from "react"

import "./FundraiseBanner.scss"

const ProgressBar = lazy(() => import('./ProgressBar'));

const FundraiseBanner = () => {
    return (
        <div className="fundraise-banner">
            <Suspense fallback={null}>
                <ProgressBar />
            </Suspense>
            <p className="progress__funded">Thank you to everyone who donated!</p>
        </div>
    )
}

export default FundraiseBanner