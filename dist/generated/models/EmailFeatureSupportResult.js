"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFeatureSupportResultToJSON = exports.EmailFeatureSupportResultFromJSONTyped = exports.EmailFeatureSupportResultFromJSON = exports.EmailFeatureSupportResultDetectedFeaturesEnum = void 0;
var _1 = require("./");
/**
 * @export
 * @enum {string}
 */
var EmailFeatureSupportResultDetectedFeaturesEnum;
(function (EmailFeatureSupportResultDetectedFeaturesEnum) {
    EmailFeatureSupportResultDetectedFeaturesEnum["amp"] = "amp";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_accent_color"] = "css-accent-color";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_align_items"] = "css-align-items";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_animation"] = "css-animation";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_aspect_ratio"] = "css-aspect-ratio";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_at_font_face"] = "css-at-font-face";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_at_import"] = "css-at-import";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_at_keyframes"] = "css-at-keyframes";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_at_media"] = "css-at-media";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_at_supports"] = "css-at-supports";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_blend_mode"] = "css-background-blend-mode";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_clip"] = "css-background-clip";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_color"] = "css-background-color";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_image"] = "css-background-image";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_origin"] = "css-background-origin";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_position"] = "css-background-position";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_repeat"] = "css-background-repeat";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background_size"] = "css-background-size";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_background"] = "css-background";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_block_inline_size"] = "css-block-inline-size";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border_image"] = "css-border-image";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border_inline_block_individual"] = "css-border-inline-block-individual";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border_inline_block_longhand"] = "css-border-inline-block-longhand";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border_inline_block"] = "css-border-inline-block";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border_radius_logical"] = "css-border-radius-logical";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border_radius"] = "css-border-radius";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_border"] = "css-border";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_box_shadow"] = "css-box-shadow";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_box_sizing"] = "css-box-sizing";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_caption_side"] = "css-caption-side";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_clip_path"] = "css-clip-path";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_column_count"] = "css-column-count";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_column_layout_properties"] = "css-column-layout-properties";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_direction"] = "css-direction";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_display_flex"] = "css-display-flex";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_display_grid"] = "css-display-grid";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_display_none"] = "css-display-none";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_display"] = "css-display";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_filter"] = "css-filter";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_flex_direction"] = "css-flex-direction";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_flex_wrap"] = "css-flex-wrap";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_float"] = "css-float";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_font_kerning"] = "css-font-kerning";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_font_weight"] = "css-font-weight";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_font"] = "css-font";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_gap"] = "css-gap";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_grid_template"] = "css-grid-template";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_height"] = "css-height";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_hyphens"] = "css-hyphens";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_inline_size"] = "css-inline-size";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_justify_content"] = "css-justify-content";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_left_right_top_bottom"] = "css-left-right-top-bottom";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_letter_spacing"] = "css-letter-spacing";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_line_height"] = "css-line-height";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_list_style_image"] = "css-list-style-image";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_list_style_position"] = "css-list-style-position";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_list_style_type"] = "css-list-style-type";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_list_style"] = "css-list-style";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_margin_block_start_end"] = "css-margin-block-start-end";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_margin_inline_block"] = "css-margin-inline-block";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_margin_inline_start_end"] = "css-margin-inline-start-end";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_margin_inline"] = "css-margin-inline";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_margin"] = "css-margin";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_max_block_size"] = "css-max-block-size";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_max_height"] = "css-max-height";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_max_width"] = "css-max-width";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_min_height"] = "css-min-height";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_min_inline_size"] = "css-min-inline-size";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_min_width"] = "css-min-width";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_mix_blend_mode"] = "css-mix-blend-mode";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_object_fit"] = "css-object-fit";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_object_position"] = "css-object-position";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_opacity"] = "css-opacity";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_outline_offset"] = "css-outline-offset";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_outline"] = "css-outline";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_overflow_wrap"] = "css-overflow-wrap";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_overflow"] = "css-overflow";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_padding_block_start_end"] = "css-padding-block-start-end";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_padding_inline_block"] = "css-padding-inline-block";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_padding_inline_start_end"] = "css-padding-inline-start-end";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_padding"] = "css-padding";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_position"] = "css-position";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_tab_size"] = "css-tab-size";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_table_layout"] = "css-table-layout";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_align_last"] = "css-text-align-last";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_align"] = "css-text-align";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_decoration_color"] = "css-text-decoration-color";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_decoration_thickness"] = "css-text-decoration-thickness";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_decoration"] = "css-text-decoration";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_emphasis_position"] = "css-text-emphasis-position";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_emphasis"] = "css-text-emphasis";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_indent"] = "css-text-indent";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_overflow"] = "css-text-overflow";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_shadow"] = "css-text-shadow";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_transform"] = "css-text-transform";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_text_underline_offset"] = "css-text-underline-offset";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_transform"] = "css-transform";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_vertical_align"] = "css-vertical-align";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_visibility"] = "css-visibility";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_white_space"] = "css-white-space";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_width"] = "css-width";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_word_break"] = "css-word-break";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_writing_mode"] = "css-writing-mode";
    EmailFeatureSupportResultDetectedFeaturesEnum["css_z_index"] = "css-z-index";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_abbr"] = "html-abbr";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_address"] = "html-address";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_align"] = "html-align";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_anchor_links"] = "html-anchor-links";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_aria_describedby"] = "html-aria-describedby";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_aria_hidden"] = "html-aria-hidden";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_aria_label"] = "html-aria-label";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_aria_labelledby"] = "html-aria-labelledby";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_aria_live"] = "html-aria-live";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_audio"] = "html-audio";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_background"] = "html-background";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_base"] = "html-base";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_blockquote"] = "html-blockquote";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_body"] = "html-body";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_button_reset"] = "html-button-reset";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_button_submit"] = "html-button-submit";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_code"] = "html-code";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_del"] = "html-del";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_dfn"] = "html-dfn";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_dialog"] = "html-dialog";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_dir"] = "html-dir";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_div"] = "html-div";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_doctype"] = "html-doctype";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_form"] = "html-form";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_h1_h6"] = "html-h1-h6";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_height"] = "html-height";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_image_maps"] = "html-image-maps";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_input_checkbox"] = "html-input-checkbox";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_input_hidden"] = "html-input-hidden";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_input_radio"] = "html-input-radio";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_input_reset"] = "html-input-reset";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_input_submit"] = "html-input-submit";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_input_text"] = "html-input-text";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_lang"] = "html-lang";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_link"] = "html-link";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_lists"] = "html-lists";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_loading_attribute"] = "html-loading-attribute";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_mailto_links"] = "html-mailto-links";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_marquee"] = "html-marquee";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_meter"] = "html-meter";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_object"] = "html-object";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_p"] = "html-p";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_picture"] = "html-picture";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_pre"] = "html-pre";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_progress"] = "html-progress";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_required"] = "html-required";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_role"] = "html-role";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_rp"] = "html-rp";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_rt"] = "html-rt";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_ruby"] = "html-ruby";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_select"] = "html-select";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_semantics"] = "html-semantics";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_small"] = "html-small";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_span"] = "html-span";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_srcset"] = "html-srcset";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_strike"] = "html-strike";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_strong"] = "html-strong";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_style"] = "html-style";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_svg"] = "html-svg";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_table"] = "html-table";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_target"] = "html-target";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_textarea"] = "html-textarea";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_valign"] = "html-valign";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_video"] = "html-video";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_wbr"] = "html-wbr";
    EmailFeatureSupportResultDetectedFeaturesEnum["html_width"] = "html-width";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_avif"] = "image-avif";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_base64"] = "image-base64";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_bmp"] = "image-bmp";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_gif"] = "image-gif";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_ico"] = "image-ico";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_jpg"] = "image-jpg";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_png"] = "image-png";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_svg"] = "image-svg";
    EmailFeatureSupportResultDetectedFeaturesEnum["image_webp"] = "image-webp";
    EmailFeatureSupportResultDetectedFeaturesEnum["unsupported"] = "unsupported";
})(EmailFeatureSupportResultDetectedFeaturesEnum = exports.EmailFeatureSupportResultDetectedFeaturesEnum || (exports.EmailFeatureSupportResultDetectedFeaturesEnum = {}));
function EmailFeatureSupportResultFromJSON(json) {
    return EmailFeatureSupportResultFromJSONTyped(json, false);
}
exports.EmailFeatureSupportResultFromJSON = EmailFeatureSupportResultFromJSON;
function EmailFeatureSupportResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        names: (0, _1.EmailFeatureNamesFromJSON)(json['names']),
        detectedFeatures: json['detectedFeatures'],
        featureOverviews: json['featureOverviews'].map(_1.EmailFeatureOverviewFromJSON),
        featurePercentages: json['featurePercentages'].map(_1.EmailFeatureSupportStatusPercentageFromJSON),
    };
}
exports.EmailFeatureSupportResultFromJSONTyped = EmailFeatureSupportResultFromJSONTyped;
function EmailFeatureSupportResultToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        names: (0, _1.EmailFeatureNamesToJSON)(value.names),
        detectedFeatures: value.detectedFeatures,
        featureOverviews: value.featureOverviews.map(_1.EmailFeatureOverviewToJSON),
        featurePercentages: value.featurePercentages.map(_1.EmailFeatureSupportStatusPercentageToJSON),
    };
}
exports.EmailFeatureSupportResultToJSON = EmailFeatureSupportResultToJSON;
