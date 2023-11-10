"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFeatureFamilyStatisticsToJSON = exports.EmailFeatureFamilyStatisticsFromJSONTyped = exports.EmailFeatureFamilyStatisticsFromJSON = exports.EmailFeatureFamilyStatisticsFamilyEnum = exports.EmailFeatureFamilyStatisticsFeatureEnum = void 0;
var _1 = require("./");
/**
 * @export
 * @enum {string}
 */
var EmailFeatureFamilyStatisticsFeatureEnum;
(function (EmailFeatureFamilyStatisticsFeatureEnum) {
    EmailFeatureFamilyStatisticsFeatureEnum["amp"] = "amp";
    EmailFeatureFamilyStatisticsFeatureEnum["css_accent_color"] = "css-accent-color";
    EmailFeatureFamilyStatisticsFeatureEnum["css_align_items"] = "css-align-items";
    EmailFeatureFamilyStatisticsFeatureEnum["css_animation"] = "css-animation";
    EmailFeatureFamilyStatisticsFeatureEnum["css_aspect_ratio"] = "css-aspect-ratio";
    EmailFeatureFamilyStatisticsFeatureEnum["css_at_font_face"] = "css-at-font-face";
    EmailFeatureFamilyStatisticsFeatureEnum["css_at_import"] = "css-at-import";
    EmailFeatureFamilyStatisticsFeatureEnum["css_at_keyframes"] = "css-at-keyframes";
    EmailFeatureFamilyStatisticsFeatureEnum["css_at_media"] = "css-at-media";
    EmailFeatureFamilyStatisticsFeatureEnum["css_at_supports"] = "css-at-supports";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_blend_mode"] = "css-background-blend-mode";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_clip"] = "css-background-clip";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_color"] = "css-background-color";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_image"] = "css-background-image";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_origin"] = "css-background-origin";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_position"] = "css-background-position";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_repeat"] = "css-background-repeat";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background_size"] = "css-background-size";
    EmailFeatureFamilyStatisticsFeatureEnum["css_background"] = "css-background";
    EmailFeatureFamilyStatisticsFeatureEnum["css_block_inline_size"] = "css-block-inline-size";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border_image"] = "css-border-image";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border_inline_block_individual"] = "css-border-inline-block-individual";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border_inline_block_longhand"] = "css-border-inline-block-longhand";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border_inline_block"] = "css-border-inline-block";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border_radius_logical"] = "css-border-radius-logical";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border_radius"] = "css-border-radius";
    EmailFeatureFamilyStatisticsFeatureEnum["css_border"] = "css-border";
    EmailFeatureFamilyStatisticsFeatureEnum["css_box_shadow"] = "css-box-shadow";
    EmailFeatureFamilyStatisticsFeatureEnum["css_box_sizing"] = "css-box-sizing";
    EmailFeatureFamilyStatisticsFeatureEnum["css_caption_side"] = "css-caption-side";
    EmailFeatureFamilyStatisticsFeatureEnum["css_clip_path"] = "css-clip-path";
    EmailFeatureFamilyStatisticsFeatureEnum["css_column_count"] = "css-column-count";
    EmailFeatureFamilyStatisticsFeatureEnum["css_column_layout_properties"] = "css-column-layout-properties";
    EmailFeatureFamilyStatisticsFeatureEnum["css_direction"] = "css-direction";
    EmailFeatureFamilyStatisticsFeatureEnum["css_display_flex"] = "css-display-flex";
    EmailFeatureFamilyStatisticsFeatureEnum["css_display_grid"] = "css-display-grid";
    EmailFeatureFamilyStatisticsFeatureEnum["css_display_none"] = "css-display-none";
    EmailFeatureFamilyStatisticsFeatureEnum["css_display"] = "css-display";
    EmailFeatureFamilyStatisticsFeatureEnum["css_filter"] = "css-filter";
    EmailFeatureFamilyStatisticsFeatureEnum["css_flex_direction"] = "css-flex-direction";
    EmailFeatureFamilyStatisticsFeatureEnum["css_flex_wrap"] = "css-flex-wrap";
    EmailFeatureFamilyStatisticsFeatureEnum["css_float"] = "css-float";
    EmailFeatureFamilyStatisticsFeatureEnum["css_font_kerning"] = "css-font-kerning";
    EmailFeatureFamilyStatisticsFeatureEnum["css_font_weight"] = "css-font-weight";
    EmailFeatureFamilyStatisticsFeatureEnum["css_font"] = "css-font";
    EmailFeatureFamilyStatisticsFeatureEnum["css_gap"] = "css-gap";
    EmailFeatureFamilyStatisticsFeatureEnum["css_grid_template"] = "css-grid-template";
    EmailFeatureFamilyStatisticsFeatureEnum["css_height"] = "css-height";
    EmailFeatureFamilyStatisticsFeatureEnum["css_hyphens"] = "css-hyphens";
    EmailFeatureFamilyStatisticsFeatureEnum["css_inline_size"] = "css-inline-size";
    EmailFeatureFamilyStatisticsFeatureEnum["css_justify_content"] = "css-justify-content";
    EmailFeatureFamilyStatisticsFeatureEnum["css_left_right_top_bottom"] = "css-left-right-top-bottom";
    EmailFeatureFamilyStatisticsFeatureEnum["css_letter_spacing"] = "css-letter-spacing";
    EmailFeatureFamilyStatisticsFeatureEnum["css_line_height"] = "css-line-height";
    EmailFeatureFamilyStatisticsFeatureEnum["css_list_style_image"] = "css-list-style-image";
    EmailFeatureFamilyStatisticsFeatureEnum["css_list_style_position"] = "css-list-style-position";
    EmailFeatureFamilyStatisticsFeatureEnum["css_list_style_type"] = "css-list-style-type";
    EmailFeatureFamilyStatisticsFeatureEnum["css_list_style"] = "css-list-style";
    EmailFeatureFamilyStatisticsFeatureEnum["css_margin_block_start_end"] = "css-margin-block-start-end";
    EmailFeatureFamilyStatisticsFeatureEnum["css_margin_inline_block"] = "css-margin-inline-block";
    EmailFeatureFamilyStatisticsFeatureEnum["css_margin_inline_start_end"] = "css-margin-inline-start-end";
    EmailFeatureFamilyStatisticsFeatureEnum["css_margin_inline"] = "css-margin-inline";
    EmailFeatureFamilyStatisticsFeatureEnum["css_margin"] = "css-margin";
    EmailFeatureFamilyStatisticsFeatureEnum["css_max_block_size"] = "css-max-block-size";
    EmailFeatureFamilyStatisticsFeatureEnum["css_max_height"] = "css-max-height";
    EmailFeatureFamilyStatisticsFeatureEnum["css_max_width"] = "css-max-width";
    EmailFeatureFamilyStatisticsFeatureEnum["css_min_height"] = "css-min-height";
    EmailFeatureFamilyStatisticsFeatureEnum["css_min_inline_size"] = "css-min-inline-size";
    EmailFeatureFamilyStatisticsFeatureEnum["css_min_width"] = "css-min-width";
    EmailFeatureFamilyStatisticsFeatureEnum["css_mix_blend_mode"] = "css-mix-blend-mode";
    EmailFeatureFamilyStatisticsFeatureEnum["css_object_fit"] = "css-object-fit";
    EmailFeatureFamilyStatisticsFeatureEnum["css_object_position"] = "css-object-position";
    EmailFeatureFamilyStatisticsFeatureEnum["css_opacity"] = "css-opacity";
    EmailFeatureFamilyStatisticsFeatureEnum["css_outline_offset"] = "css-outline-offset";
    EmailFeatureFamilyStatisticsFeatureEnum["css_outline"] = "css-outline";
    EmailFeatureFamilyStatisticsFeatureEnum["css_overflow_wrap"] = "css-overflow-wrap";
    EmailFeatureFamilyStatisticsFeatureEnum["css_overflow"] = "css-overflow";
    EmailFeatureFamilyStatisticsFeatureEnum["css_padding_block_start_end"] = "css-padding-block-start-end";
    EmailFeatureFamilyStatisticsFeatureEnum["css_padding_inline_block"] = "css-padding-inline-block";
    EmailFeatureFamilyStatisticsFeatureEnum["css_padding_inline_start_end"] = "css-padding-inline-start-end";
    EmailFeatureFamilyStatisticsFeatureEnum["css_padding"] = "css-padding";
    EmailFeatureFamilyStatisticsFeatureEnum["css_position"] = "css-position";
    EmailFeatureFamilyStatisticsFeatureEnum["css_tab_size"] = "css-tab-size";
    EmailFeatureFamilyStatisticsFeatureEnum["css_table_layout"] = "css-table-layout";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_align_last"] = "css-text-align-last";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_align"] = "css-text-align";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_decoration_color"] = "css-text-decoration-color";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_decoration_thickness"] = "css-text-decoration-thickness";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_decoration"] = "css-text-decoration";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_emphasis_position"] = "css-text-emphasis-position";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_emphasis"] = "css-text-emphasis";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_indent"] = "css-text-indent";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_overflow"] = "css-text-overflow";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_shadow"] = "css-text-shadow";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_transform"] = "css-text-transform";
    EmailFeatureFamilyStatisticsFeatureEnum["css_text_underline_offset"] = "css-text-underline-offset";
    EmailFeatureFamilyStatisticsFeatureEnum["css_transform"] = "css-transform";
    EmailFeatureFamilyStatisticsFeatureEnum["css_vertical_align"] = "css-vertical-align";
    EmailFeatureFamilyStatisticsFeatureEnum["css_visibility"] = "css-visibility";
    EmailFeatureFamilyStatisticsFeatureEnum["css_white_space"] = "css-white-space";
    EmailFeatureFamilyStatisticsFeatureEnum["css_width"] = "css-width";
    EmailFeatureFamilyStatisticsFeatureEnum["css_word_break"] = "css-word-break";
    EmailFeatureFamilyStatisticsFeatureEnum["css_writing_mode"] = "css-writing-mode";
    EmailFeatureFamilyStatisticsFeatureEnum["css_z_index"] = "css-z-index";
    EmailFeatureFamilyStatisticsFeatureEnum["html_abbr"] = "html-abbr";
    EmailFeatureFamilyStatisticsFeatureEnum["html_address"] = "html-address";
    EmailFeatureFamilyStatisticsFeatureEnum["html_align"] = "html-align";
    EmailFeatureFamilyStatisticsFeatureEnum["html_anchor_links"] = "html-anchor-links";
    EmailFeatureFamilyStatisticsFeatureEnum["html_aria_describedby"] = "html-aria-describedby";
    EmailFeatureFamilyStatisticsFeatureEnum["html_aria_hidden"] = "html-aria-hidden";
    EmailFeatureFamilyStatisticsFeatureEnum["html_aria_label"] = "html-aria-label";
    EmailFeatureFamilyStatisticsFeatureEnum["html_aria_labelledby"] = "html-aria-labelledby";
    EmailFeatureFamilyStatisticsFeatureEnum["html_aria_live"] = "html-aria-live";
    EmailFeatureFamilyStatisticsFeatureEnum["html_audio"] = "html-audio";
    EmailFeatureFamilyStatisticsFeatureEnum["html_background"] = "html-background";
    EmailFeatureFamilyStatisticsFeatureEnum["html_base"] = "html-base";
    EmailFeatureFamilyStatisticsFeatureEnum["html_blockquote"] = "html-blockquote";
    EmailFeatureFamilyStatisticsFeatureEnum["html_body"] = "html-body";
    EmailFeatureFamilyStatisticsFeatureEnum["html_button_reset"] = "html-button-reset";
    EmailFeatureFamilyStatisticsFeatureEnum["html_button_submit"] = "html-button-submit";
    EmailFeatureFamilyStatisticsFeatureEnum["html_code"] = "html-code";
    EmailFeatureFamilyStatisticsFeatureEnum["html_del"] = "html-del";
    EmailFeatureFamilyStatisticsFeatureEnum["html_dfn"] = "html-dfn";
    EmailFeatureFamilyStatisticsFeatureEnum["html_dialog"] = "html-dialog";
    EmailFeatureFamilyStatisticsFeatureEnum["html_dir"] = "html-dir";
    EmailFeatureFamilyStatisticsFeatureEnum["html_div"] = "html-div";
    EmailFeatureFamilyStatisticsFeatureEnum["html_doctype"] = "html-doctype";
    EmailFeatureFamilyStatisticsFeatureEnum["html_form"] = "html-form";
    EmailFeatureFamilyStatisticsFeatureEnum["html_h1_h6"] = "html-h1-h6";
    EmailFeatureFamilyStatisticsFeatureEnum["html_height"] = "html-height";
    EmailFeatureFamilyStatisticsFeatureEnum["html_image_maps"] = "html-image-maps";
    EmailFeatureFamilyStatisticsFeatureEnum["html_input_checkbox"] = "html-input-checkbox";
    EmailFeatureFamilyStatisticsFeatureEnum["html_input_hidden"] = "html-input-hidden";
    EmailFeatureFamilyStatisticsFeatureEnum["html_input_radio"] = "html-input-radio";
    EmailFeatureFamilyStatisticsFeatureEnum["html_input_reset"] = "html-input-reset";
    EmailFeatureFamilyStatisticsFeatureEnum["html_input_submit"] = "html-input-submit";
    EmailFeatureFamilyStatisticsFeatureEnum["html_input_text"] = "html-input-text";
    EmailFeatureFamilyStatisticsFeatureEnum["html_lang"] = "html-lang";
    EmailFeatureFamilyStatisticsFeatureEnum["html_link"] = "html-link";
    EmailFeatureFamilyStatisticsFeatureEnum["html_lists"] = "html-lists";
    EmailFeatureFamilyStatisticsFeatureEnum["html_loading_attribute"] = "html-loading-attribute";
    EmailFeatureFamilyStatisticsFeatureEnum["html_mailto_links"] = "html-mailto-links";
    EmailFeatureFamilyStatisticsFeatureEnum["html_marquee"] = "html-marquee";
    EmailFeatureFamilyStatisticsFeatureEnum["html_meter"] = "html-meter";
    EmailFeatureFamilyStatisticsFeatureEnum["html_object"] = "html-object";
    EmailFeatureFamilyStatisticsFeatureEnum["html_p"] = "html-p";
    EmailFeatureFamilyStatisticsFeatureEnum["html_picture"] = "html-picture";
    EmailFeatureFamilyStatisticsFeatureEnum["html_pre"] = "html-pre";
    EmailFeatureFamilyStatisticsFeatureEnum["html_progress"] = "html-progress";
    EmailFeatureFamilyStatisticsFeatureEnum["html_required"] = "html-required";
    EmailFeatureFamilyStatisticsFeatureEnum["html_role"] = "html-role";
    EmailFeatureFamilyStatisticsFeatureEnum["html_rp"] = "html-rp";
    EmailFeatureFamilyStatisticsFeatureEnum["html_rt"] = "html-rt";
    EmailFeatureFamilyStatisticsFeatureEnum["html_ruby"] = "html-ruby";
    EmailFeatureFamilyStatisticsFeatureEnum["html_select"] = "html-select";
    EmailFeatureFamilyStatisticsFeatureEnum["html_semantics"] = "html-semantics";
    EmailFeatureFamilyStatisticsFeatureEnum["html_small"] = "html-small";
    EmailFeatureFamilyStatisticsFeatureEnum["html_span"] = "html-span";
    EmailFeatureFamilyStatisticsFeatureEnum["html_srcset"] = "html-srcset";
    EmailFeatureFamilyStatisticsFeatureEnum["html_strike"] = "html-strike";
    EmailFeatureFamilyStatisticsFeatureEnum["html_strong"] = "html-strong";
    EmailFeatureFamilyStatisticsFeatureEnum["html_style"] = "html-style";
    EmailFeatureFamilyStatisticsFeatureEnum["html_svg"] = "html-svg";
    EmailFeatureFamilyStatisticsFeatureEnum["html_table"] = "html-table";
    EmailFeatureFamilyStatisticsFeatureEnum["html_target"] = "html-target";
    EmailFeatureFamilyStatisticsFeatureEnum["html_textarea"] = "html-textarea";
    EmailFeatureFamilyStatisticsFeatureEnum["html_valign"] = "html-valign";
    EmailFeatureFamilyStatisticsFeatureEnum["html_video"] = "html-video";
    EmailFeatureFamilyStatisticsFeatureEnum["html_wbr"] = "html-wbr";
    EmailFeatureFamilyStatisticsFeatureEnum["html_width"] = "html-width";
    EmailFeatureFamilyStatisticsFeatureEnum["image_avif"] = "image-avif";
    EmailFeatureFamilyStatisticsFeatureEnum["image_base64"] = "image-base64";
    EmailFeatureFamilyStatisticsFeatureEnum["image_bmp"] = "image-bmp";
    EmailFeatureFamilyStatisticsFeatureEnum["image_gif"] = "image-gif";
    EmailFeatureFamilyStatisticsFeatureEnum["image_ico"] = "image-ico";
    EmailFeatureFamilyStatisticsFeatureEnum["image_jpg"] = "image-jpg";
    EmailFeatureFamilyStatisticsFeatureEnum["image_png"] = "image-png";
    EmailFeatureFamilyStatisticsFeatureEnum["image_svg"] = "image-svg";
    EmailFeatureFamilyStatisticsFeatureEnum["image_webp"] = "image-webp";
    EmailFeatureFamilyStatisticsFeatureEnum["unsupported"] = "unsupported";
})(EmailFeatureFamilyStatisticsFeatureEnum = exports.EmailFeatureFamilyStatisticsFeatureEnum || (exports.EmailFeatureFamilyStatisticsFeatureEnum = {}));
/**
 * @export
 * @enum {string}
 */
var EmailFeatureFamilyStatisticsFamilyEnum;
(function (EmailFeatureFamilyStatisticsFamilyEnum) {
    EmailFeatureFamilyStatisticsFamilyEnum["aol"] = "aol";
    EmailFeatureFamilyStatisticsFamilyEnum["apple_mail"] = "apple-mail";
    EmailFeatureFamilyStatisticsFamilyEnum["fastmail"] = "fastmail";
    EmailFeatureFamilyStatisticsFamilyEnum["free_fr"] = "free-fr";
    EmailFeatureFamilyStatisticsFamilyEnum["gmail"] = "gmail";
    EmailFeatureFamilyStatisticsFamilyEnum["gmx"] = "gmx";
    EmailFeatureFamilyStatisticsFamilyEnum["hey"] = "hey";
    EmailFeatureFamilyStatisticsFamilyEnum["ionos_1and1"] = "ionos-1and1";
    EmailFeatureFamilyStatisticsFamilyEnum["laposte"] = "laposte";
    EmailFeatureFamilyStatisticsFamilyEnum["mail_ru"] = "mail-ru";
    EmailFeatureFamilyStatisticsFamilyEnum["microsoft"] = "microsoft";
    EmailFeatureFamilyStatisticsFamilyEnum["orange"] = "orange";
    EmailFeatureFamilyStatisticsFamilyEnum["outlook"] = "outlook";
    EmailFeatureFamilyStatisticsFamilyEnum["protonmail"] = "protonmail";
    EmailFeatureFamilyStatisticsFamilyEnum["rainloop"] = "rainloop";
    EmailFeatureFamilyStatisticsFamilyEnum["samsung_email"] = "samsung-email";
    EmailFeatureFamilyStatisticsFamilyEnum["sfr"] = "sfr";
    EmailFeatureFamilyStatisticsFamilyEnum["t_online_de"] = "t-online-de";
    EmailFeatureFamilyStatisticsFamilyEnum["thunderbird"] = "thunderbird";
    EmailFeatureFamilyStatisticsFamilyEnum["web_de"] = "web-de";
    EmailFeatureFamilyStatisticsFamilyEnum["yahoo"] = "yahoo";
})(EmailFeatureFamilyStatisticsFamilyEnum = exports.EmailFeatureFamilyStatisticsFamilyEnum || (exports.EmailFeatureFamilyStatisticsFamilyEnum = {}));
function EmailFeatureFamilyStatisticsFromJSON(json) {
    return EmailFeatureFamilyStatisticsFromJSONTyped(json, false);
}
exports.EmailFeatureFamilyStatisticsFromJSON = EmailFeatureFamilyStatisticsFromJSON;
function EmailFeatureFamilyStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        feature: json['feature'],
        family: json['family'],
        platforms: json['platforms'].map(_1.EmailFeaturePlatformStatisticsFromJSON),
    };
}
exports.EmailFeatureFamilyStatisticsFromJSONTyped = EmailFeatureFamilyStatisticsFromJSONTyped;
function EmailFeatureFamilyStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        feature: value.feature,
        family: value.family,
        platforms: value.platforms.map(_1.EmailFeaturePlatformStatisticsToJSON),
    };
}
exports.EmailFeatureFamilyStatisticsToJSON = EmailFeatureFamilyStatisticsToJSON;