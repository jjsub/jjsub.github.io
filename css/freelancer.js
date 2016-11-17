import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "overflowX": "hidden"
    },
    "p": {
        "fontSize": 20
    },
    "psmall": {
        "fontSize": 16
    },
    "a": {
        "color": "#1894bc",
        "outline": "none"
    },
    "a:hover": {
        "color": "#1894bc",
        "outline": "none"
    },
    "a:focus": {
        "color": "#1894bc",
        "outline": "none"
    },
    "a:active": {
        "color": "#1894bc",
        "outline": "none"
    },
    "aactive": {
        "color": "#1894bc",
        "outline": "none"
    },
    "h1": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h2": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h3": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h4": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h5": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h6": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "hrstar-light": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderTop": "solid 5px",
        "textAlign": "center",
        "maxWidth": 250,
        "marginTop": 25,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "borderColor": "white"
    },
    "hrstar-primary": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderTop": "solid 5px",
        "textAlign": "center",
        "maxWidth": 250,
        "marginTop": 25,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "borderColor": "#2C3E50"
    },
    "hrstar-light:after": {
        "content": "\\f005",
        "fontFamily": "FontAwesome",
        "display": "inline-block",
        "position": "relative",
        "top": -0.8,
        "fontSize": 2,
        "paddingTop": 0,
        "paddingRight": 0.25,
        "paddingBottom": 0,
        "paddingLeft": 0.25,
        "backgroundColor": "#1894bc",
        "color": "white"
    },
    "hrstar-primary:after": {
        "content": "\\f005",
        "fontFamily": "FontAwesome",
        "display": "inline-block",
        "position": "relative",
        "top": -0.8,
        "fontSize": 2,
        "paddingTop": 0,
        "paddingRight": 0.25,
        "paddingBottom": 0,
        "paddingLeft": 0.25,
        "backgroundColor": "white",
        "color": "#2C3E50"
    },
    "img-centered": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "header": {
        "textAlign": "center",
        "background": "#1894bc",
        "color": "white"
    },
    "header container": {
        "paddingTop": 100,
        "paddingBottom": 50
    },
    "header img": {
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto"
    },
    "header intro-text name": {
        "display": "block",
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "fontSize": 2
    },
    "header intro-text skills": {
        "fontSize": 1.25,
        "fontWeight": "300"
    },
    "navbar-custom": {
        "background": "#2C3E50",
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "border": "none"
    },
    "navbar-custom a:focus": {
        "outline": "none"
    },
    "navbar-custom navbar-brand": {
        "color": "white"
    },
    "navbar-custom navbar-brand:hover": {
        "color": "white"
    },
    "navbar-custom navbar-brand:focus": {
        "color": "white"
    },
    "navbar-custom navbar-brand:active": {
        "color": "white"
    },
    "navbar-custom navbar-brandactive": {
        "color": "white"
    },
    "navbar-custom navbar-nav": {
        "letterSpacing": 1
    },
    "navbar-custom navbar-nav li a": {
        "color": "white"
    },
    "navbar-custom navbar-nav li a:hover": {
        "color": "#1894bc",
        "outline": "none"
    },
    "navbar-custom navbar-nav li a:focus": {
        "color": "white"
    },
    "navbar-custom navbar-nav li a:active": {
        "color": "white"
    },
    "navbar-custom navbar-nav liactive a": {
        "color": "white",
        "background": "#1894bc"
    },
    "navbar-custom navbar-nav liactive a:hover": {
        "color": "white",
        "background": "#1894bc"
    },
    "navbar-custom navbar-nav liactive a:focus": {
        "color": "white",
        "background": "#1894bc"
    },
    "navbar-custom navbar-nav liactive a:active": {
        "color": "white",
        "background": "#1894bc"
    },
    "navbar-custom navbar-toggle": {
        "color": "white",
        "textTransform": "uppercase",
        "fontSize": 10,
        "borderColor": "white"
    },
    "navbar-custom navbar-toggle:hover": {
        "backgroundColor": "#1894bc",
        "color": "white",
        "borderColor": "#1894bc"
    },
    "navbar-custom navbar-toggle:focus": {
        "backgroundColor": "#1894bc",
        "color": "white",
        "borderColor": "#1894bc"
    },
    "section": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "section h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 3
    },
    "sectionsuccess": {
        "background": "#1894bc",
        "color": "white"
    },
    "portfolio portfolio-item": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "right": 0
    },
    "portfolio portfolio-item portfolio-link": {
        "display": "block",
        "position": "relative",
        "maxWidth": 400,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "portfolio portfolio-item portfolio-link caption": {
        "background": "rgba(24, 148, 188, 0.9)",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "opacity": 0,
        "transition": "all ease 0.5s",
        "WebkitTransition": "all ease 0.5s",
        "MozTransition": "all ease 0.5s"
    },
    "portfolio portfolio-item portfolio-link caption:hover": {
        "opacity": 1
    },
    "portfolio portfolio-item portfolio-link caption caption-content": {
        "position": "absolute",
        "width": "100%",
        "height": 20,
        "fontSize": 20,
        "textAlign": "center",
        "top": "50%",
        "marginTop": -12,
        "color": "white"
    },
    "portfolio portfolio-item portfolio-link caption caption-content i": {
        "marginTop": -12
    },
    "portfolio portfolio-item portfolio-link caption caption-content h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-link caption caption-content h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio *": {
        "zIndex": 2
    },
    "floating-label-form-group": {
        "position": "relative",
        "marginBottom": 0,
        "paddingBottom": 0.5,
        "borderBottom": "1px solid #eeeeee"
    },
    "floating-label-form-group input": {
        "zIndex": 1,
        "position": "relative",
        "paddingRight": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 1.5,
        "background": "none",
        "boxShadow": "none !important",
        "resize": "none"
    },
    "floating-label-form-group textarea": {
        "zIndex": 1,
        "position": "relative",
        "paddingRight": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 1.5,
        "background": "none",
        "boxShadow": "none !important",
        "resize": "none"
    },
    "floating-label-form-group label": {
        "display": "block",
        "zIndex": 0,
        "position": "relative",
        "top": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 0.85,
        "lineHeight": 1.764705882,
        "verticalAlign": "baseline",
        "opacity": 0,
        "WebkitTransition": "top 0.3s ease,opacity 0.3s ease",
        "MozTransition": "top 0.3s ease,opacity 0.3s ease",
        "MsTransition": "top 0.3s ease,opacity 0.3s ease",
        "transition": "top 0.3s ease,opacity 0.3s ease"
    },
    "floating-label-form-group:not(:first-child)": {
        "paddingLeft": 14,
        "borderLeft": "1px solid #eeeeee"
    },
    "floating-label-form-group-with-value label": {
        "top": 0,
        "opacity": 1
    },
    "floating-label-form-group-with-focus label": {
        "color": "#1894bc"
    },
    "form row:first-child floating-label-form-group": {
        "borderTop": "1px solid #eeeeee"
    },
    "footer": {
        "color": "white"
    },
    "footer h3": {
        "marginBottom": 30
    },
    "footer footer-above": {
        "paddingTop": 50,
        "backgroundColor": "#2C3E50"
    },
    "footer footer-col": {
        "marginBottom": 50
    },
    "footer footer-below": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "backgroundColor": "#233140"
    },
    "btn-outline": {
        "color": "white",
        "fontSize": 20,
        "border": "solid 2px white",
        "background": "transparent",
        "transition": "all 0.3s ease-in-out",
        "marginTop": 15
    },
    "btn-outline:hover": {
        "color": "#1894bc",
        "background": "white",
        "border": "solid 2px white"
    },
    "btn-outline:focus": {
        "color": "#1894bc",
        "background": "white",
        "border": "solid 2px white"
    },
    "btn-outline:active": {
        "color": "#1894bc",
        "background": "white",
        "border": "solid 2px white"
    },
    "btn-outlineactive": {
        "color": "#1894bc",
        "background": "white",
        "border": "solid 2px white"
    },
    "btn-primary": {
        "color": "white",
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50",
        "fontWeight": "700"
    },
    "btn-primary:hover": {
        "color": "white",
        "backgroundColor": "#1a242f",
        "borderColor": "#161f29"
    },
    "btn-primary:focus": {
        "color": "white",
        "backgroundColor": "#1a242f",
        "borderColor": "#161f29"
    },
    "btn-primary:active": {
        "color": "white",
        "backgroundColor": "#1a242f",
        "borderColor": "#161f29",
        "backgroundImage": "none"
    },
    "btn-primaryactive": {
        "color": "white",
        "backgroundColor": "#1a242f",
        "borderColor": "#161f29",
        "backgroundImage": "none"
    },
    "open dropdown-togglebtn-primary": {
        "color": "white",
        "backgroundColor": "#1a242f",
        "borderColor": "#161f29",
        "backgroundImage": "none"
    },
    "btn-primarydisabled": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primary[disabled]": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "fieldset[disabled] btn-primary": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "#2C3E50",
        "borderColor": "#2C3E50"
    },
    "btn-primary badge": {
        "color": "#2C3E50",
        "backgroundColor": "white"
    },
    "btn-success": {
        "color": "white",
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc",
        "fontWeight": "700"
    },
    "btn-success:hover": {
        "color": "white",
        "backgroundColor": "#12708f",
        "borderColor": "#116986"
    },
    "btn-success:focus": {
        "color": "white",
        "backgroundColor": "#12708f",
        "borderColor": "#116986"
    },
    "btn-success:active": {
        "color": "white",
        "backgroundColor": "#12708f",
        "borderColor": "#116986",
        "backgroundImage": "none"
    },
    "btn-successactive": {
        "color": "white",
        "backgroundColor": "#12708f",
        "borderColor": "#116986",
        "backgroundImage": "none"
    },
    "open dropdown-togglebtn-success": {
        "color": "white",
        "backgroundColor": "#12708f",
        "borderColor": "#116986",
        "backgroundImage": "none"
    },
    "btn-successdisabled": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-success[disabled]": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "fieldset[disabled] btn-success": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-successdisabled:active": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-success[disabled]:active": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "fieldset[disabled] btn-success:active": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-successdisabledactive": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-success[disabled]active": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "fieldset[disabled] btn-successactive": {
        "backgroundColor": "#1894bc",
        "borderColor": "#1894bc"
    },
    "btn-success badge": {
        "color": "#1894bc",
        "backgroundColor": "white"
    },
    "btn-social": {
        "display": "inline-block",
        "height": 50,
        "width": 50,
        "border": "2px solid white",
        "borderRadius": "100%",
        "textAlign": "center",
        "fontSize": 20,
        "lineHeight": 45
    },
    "btn:focus": {
        "outline": "none"
    },
    "btn:active": {
        "outline": "none"
    },
    "btnactive": {
        "outline": "none"
    },
    "scroll-top": {
        "position": "fixed",
        "right": "2%",
        "bottom": "2%",
        "width": 50,
        "height": 50,
        "zIndex": 1049
    },
    "scroll-top btn": {
        "fontSize": 20,
        "width": 50,
        "height": 50,
        "borderRadius": "100%",
        "lineHeight": 28
    },
    "scroll-top btn:focus": {
        "outline": "none"
    },
    "portfolio-modal modal-content": {
        "borderRadius": 0,
        "backgroundClip": "border-box",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "none",
        "minHeight": "100%",
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "portfolio-modal modal-content h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 3
    },
    "portfolio-modal modal-content img": {
        "marginBottom": 30
    },
    "portfolio-modal modal-content item-details": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "portfolio-modal close-modal": {
        "position": "absolute",
        "width": 75,
        "height": 75,
        "backgroundColor": "transparent",
        "top": 25,
        "right": 25,
        "cursor": "pointer"
    },
    "portfolio-modal close-modal:hover": {
        "opacity": 0.3
    },
    "portfolio-modal close-modal lr": {
        "height": 75,
        "width": 1,
        "marginLeft": 35,
        "backgroundColor": "#2C3E50",
        "transform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "WebkitTransform": "rotate(45deg)",
        "zIndex": 1051
    },
    "portfolio-modal close-modal lr rl": {
        "height": 75,
        "width": 1,
        "backgroundColor": "#2C3E50",
        "transform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "WebkitTransform": "rotate(90deg)",
        "zIndex": 1052
    },
    "portfolio-modal modal-backdrop": {
        "opacity": 0,
        "display": "none"
    }
});