import {Link, Outlet} from "react-router-dom";

export const Root = () => {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={"hello"}>Hello</Link>
                        </li>
                        <li>
                            <Link to={"hello-jp"}>こんにちは</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}
