import React from "react";
interface FacebookLoginProps {
    callback: (response: any) => void;
    appId: string;
    xfbml?: boolean;
    cookie?: boolean;
    scope?: string;
    textButton?: string;
    autoLoad?: boolean;
    size?: string;
    fields?: string;
    cssClass?: string;
    version?: string;
    icon?: string;
    language?: string;
}
declare class FacebookLogin extends React.Component<FacebookLoginProps> {
    static defaultProps: {
        textButton: string;
        scope: string;
        xfbml: boolean;
        cookie: boolean;
        size: string;
        fields: string;
        cssClass: string;
        version: string;
        language: string;
    };
    constructor(props: FacebookLoginProps);
    componentDidMount(): void;
    fetchUser: (authResponse: any, callback: (response: any) => void) => void;
    responseApi: (authResponse: any) => void;
    checkLoginState: (response: any) => void;
    click: () => void;
    renderWithFontAwesome(): React.JSX.Element;
    render(): React.JSX.Element;
}
export default FacebookLogin;
//# sourceMappingURL=facebook.d.ts.map