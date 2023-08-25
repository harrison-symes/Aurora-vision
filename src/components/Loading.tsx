import * as React from "react"

import Loader from "react-loaders"

const Loading = () => {
    return <div className="loader__container">
        <Loader 
            active
            type="line-scale-party"
            innerClassName="loader__spinner"
        />
    </div>
}

export default Loading