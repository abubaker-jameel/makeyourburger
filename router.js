import Discovery from "./pages/discovery.js";
import MakeYourBurger from "./pages/makeYourBurger.js";

const router = new Navigo(null, true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes()
    }

    createRoutes() {
        const routes = [{
                path: '/',
                page: Discovery
            },
            {
                path: '/makeyourburger',
                page: MakeYourBurger
            }
        ];

        routes.forEach(({
            path,
            page
        }) => {
            router.on(path, () => {
                page();
            }).resolve();
        })
    }
}