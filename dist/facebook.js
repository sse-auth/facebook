"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = __importDefault(require("./styles"));
class FacebookLogin extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.fetchUser = (authResponse, callback) => {
            window.FB.api("/me", { fields: this.props.fields }, (me) => {
                Object.assign(me, authResponse);
                callback(me);
            });
        };
        this.responseApi = (authResponse) => {
            this.fetchUser(authResponse, this.props.callback);
        };
        this.checkLoginState = (response) => {
            if (response.authResponse) {
                this.responseApi(response.authResponse);
            }
            else {
                if (this.props.callback) {
                    this.props.callback({ status: response.status });
                }
            }
        };
        this.click = () => {
            const { scope, appId } = this.props;
            if (navigator.userAgent.match("CriOS")) {
                window.location.href = `https://www.facebook.com/dialog/oauth?client_id=${appId}&redirect_uri=${window.location.href}&state=facebookdirect&${scope}`;
            }
            else {
                window.FB.login(this.checkLoginState, { scope });
            }
        };
    }
    componentDidMount() {
        const { appId, xfbml, cookie, version, autoLoad, language } = this.props;
        const fbRoot = document.createElement("div");
        fbRoot.id = "fb-root";
        document.body.appendChild(fbRoot);
        window.fbAsyncInit = () => {
            window.FB.init({
                version: `v${version}`,
                appId,
                xfbml,
                cookie,
            });
            if (autoLoad || window.location.search.includes("facebookdirect")) {
                window.FB.getLoginStatus(this.checkLoginState);
            }
        };
        // Load the SDK asynchronously
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.setAttribute("src", `//connect.facebook.net/${language}/all.js`);
            if (fjs.parentNode) {
                fjs.parentNode.insertBefore(js, fjs);
            }
        })(document, "script", "facebook-jssdk");
    }
    renderWithFontAwesome() {
        const { cssClass, size, icon, textButton } = this.props;
        return (react_1.default.createElement("span", null,
            react_1.default.createElement("link", { rel: "stylesheet", href: "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" }),
            react_1.default.createElement("button", { className: `${cssClass} ${size}`, onClick: this.click },
                react_1.default.createElement("i", { className: `fa ${icon}` }),
                " ",
                textButton),
            react_1.default.createElement("style", { dangerouslySetInnerHTML: { __html: styles_1.default } })));
    }
    render() {
        const { cssClass, size, icon, textButton } = this.props;
        if (icon) {
            return this.renderWithFontAwesome();
        }
        return (react_1.default.createElement("span", null,
            react_1.default.createElement("button", { className: `${cssClass} ${size}`, onClick: this.click }, textButton),
            react_1.default.createElement("style", { dangerouslySetInnerHTML: { __html: styles_1.default } })));
    }
}
FacebookLogin.defaultProps = {
    textButton: "Login with Facebook",
    scope: "public_profile,email",
    xfbml: false,
    cookie: false,
    size: "metro",
    fields: "name",
    cssClass: "kep-login-facebook",
    version: "2.0.0",
    language: "en_US",
};
exports.default = FacebookLogin;
//# sourceMappingURL=facebook.js.map