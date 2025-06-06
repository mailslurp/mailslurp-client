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

import { exists, mapValues } from '../runtime';
import {
  EmailFeatureFamilyStatistics,
  EmailFeatureFamilyStatisticsFromJSON,
  EmailFeatureFamilyStatisticsFromJSONTyped,
  EmailFeatureFamilyStatisticsToJSON,
} from './';

/**
 *
 * @export
 * @interface EmailFeatureOverview
 */
export interface EmailFeatureOverview {
  /**
   *
   * @type {string}
   * @memberof EmailFeatureOverview
   */
  feature: EmailFeatureOverviewFeatureEnum;
  /**
   *
   * @type {string}
   * @memberof EmailFeatureOverview
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof EmailFeatureOverview
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof EmailFeatureOverview
   */
  category?: EmailFeatureOverviewCategoryEnum;
  /**
   *
   * @type {string}
   * @memberof EmailFeatureOverview
   */
  notes?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EmailFeatureOverview
   */
  notesNumbers?: { [key: string]: string };
  /**
   *
   * @type {Array<EmailFeatureFamilyStatistics>}
   * @memberof EmailFeatureOverview
   */
  featureStatistics?: Array<EmailFeatureFamilyStatistics>;
  /**
   *
   * @type {Set<string>}
   * @memberof EmailFeatureOverview
   */
  statuses: Set<EmailFeatureOverviewStatusesEnum>;
}

/**
 * @export
 * @enum {string}
 */
export enum EmailFeatureOverviewFeatureEnum {
  amp = 'amp',
  css_accent_color = 'css-accent-color',
  css_align_items = 'css-align-items',
  css_animation = 'css-animation',
  css_aspect_ratio = 'css-aspect-ratio',
  css_at_font_face = 'css-at-font-face',
  css_at_import = 'css-at-import',
  css_at_keyframes = 'css-at-keyframes',
  css_at_media = 'css-at-media',
  css_at_supports = 'css-at-supports',
  css_background_blend_mode = 'css-background-blend-mode',
  css_background_clip = 'css-background-clip',
  css_background_color = 'css-background-color',
  css_background_image = 'css-background-image',
  css_background_origin = 'css-background-origin',
  css_background_position = 'css-background-position',
  css_background_repeat = 'css-background-repeat',
  css_background_size = 'css-background-size',
  css_background = 'css-background',
  css_block_inline_size = 'css-block-inline-size',
  css_border_image = 'css-border-image',
  css_border_inline_block_individual = 'css-border-inline-block-individual',
  css_border_inline_block_longhand = 'css-border-inline-block-longhand',
  css_border_inline_block = 'css-border-inline-block',
  css_border_radius_logical = 'css-border-radius-logical',
  css_border_radius = 'css-border-radius',
  css_border = 'css-border',
  css_box_shadow = 'css-box-shadow',
  css_box_sizing = 'css-box-sizing',
  css_caption_side = 'css-caption-side',
  css_clip_path = 'css-clip-path',
  css_column_count = 'css-column-count',
  css_column_layout_properties = 'css-column-layout-properties',
  css_direction = 'css-direction',
  css_display_flex = 'css-display-flex',
  css_display_grid = 'css-display-grid',
  css_display_none = 'css-display-none',
  css_display = 'css-display',
  css_filter = 'css-filter',
  css_flex_direction = 'css-flex-direction',
  css_flex_wrap = 'css-flex-wrap',
  css_float = 'css-float',
  css_font_kerning = 'css-font-kerning',
  css_font_weight = 'css-font-weight',
  css_font = 'css-font',
  css_gap = 'css-gap',
  css_grid_template = 'css-grid-template',
  css_height = 'css-height',
  css_hyphens = 'css-hyphens',
  css_inline_size = 'css-inline-size',
  css_justify_content = 'css-justify-content',
  css_left_right_top_bottom = 'css-left-right-top-bottom',
  css_letter_spacing = 'css-letter-spacing',
  css_line_height = 'css-line-height',
  css_list_style_image = 'css-list-style-image',
  css_list_style_position = 'css-list-style-position',
  css_list_style_type = 'css-list-style-type',
  css_list_style = 'css-list-style',
  css_margin_block_start_end = 'css-margin-block-start-end',
  css_margin_inline_block = 'css-margin-inline-block',
  css_margin_inline_start_end = 'css-margin-inline-start-end',
  css_margin_inline = 'css-margin-inline',
  css_margin = 'css-margin',
  css_max_block_size = 'css-max-block-size',
  css_max_height = 'css-max-height',
  css_max_width = 'css-max-width',
  css_min_height = 'css-min-height',
  css_min_inline_size = 'css-min-inline-size',
  css_min_width = 'css-min-width',
  css_mix_blend_mode = 'css-mix-blend-mode',
  css_object_fit = 'css-object-fit',
  css_object_position = 'css-object-position',
  css_opacity = 'css-opacity',
  css_outline_offset = 'css-outline-offset',
  css_outline = 'css-outline',
  css_overflow_wrap = 'css-overflow-wrap',
  css_overflow = 'css-overflow',
  css_padding_block_start_end = 'css-padding-block-start-end',
  css_padding_inline_block = 'css-padding-inline-block',
  css_padding_inline_start_end = 'css-padding-inline-start-end',
  css_padding = 'css-padding',
  css_position = 'css-position',
  css_tab_size = 'css-tab-size',
  css_table_layout = 'css-table-layout',
  css_text_align_last = 'css-text-align-last',
  css_text_align = 'css-text-align',
  css_text_decoration_color = 'css-text-decoration-color',
  css_text_decoration_thickness = 'css-text-decoration-thickness',
  css_text_decoration = 'css-text-decoration',
  css_text_emphasis_position = 'css-text-emphasis-position',
  css_text_emphasis = 'css-text-emphasis',
  css_text_indent = 'css-text-indent',
  css_text_overflow = 'css-text-overflow',
  css_text_shadow = 'css-text-shadow',
  css_text_transform = 'css-text-transform',
  css_text_underline_offset = 'css-text-underline-offset',
  css_transform = 'css-transform',
  css_vertical_align = 'css-vertical-align',
  css_visibility = 'css-visibility',
  css_white_space = 'css-white-space',
  css_width = 'css-width',
  css_word_break = 'css-word-break',
  css_writing_mode = 'css-writing-mode',
  css_z_index = 'css-z-index',
  html_abbr = 'html-abbr',
  html_address = 'html-address',
  html_align = 'html-align',
  html_anchor_links = 'html-anchor-links',
  html_aria_describedby = 'html-aria-describedby',
  html_aria_hidden = 'html-aria-hidden',
  html_aria_label = 'html-aria-label',
  html_aria_labelledby = 'html-aria-labelledby',
  html_aria_live = 'html-aria-live',
  html_audio = 'html-audio',
  html_background = 'html-background',
  html_base = 'html-base',
  html_blockquote = 'html-blockquote',
  html_body = 'html-body',
  html_button_reset = 'html-button-reset',
  html_button_submit = 'html-button-submit',
  html_code = 'html-code',
  html_del = 'html-del',
  html_dfn = 'html-dfn',
  html_dialog = 'html-dialog',
  html_dir = 'html-dir',
  html_div = 'html-div',
  html_doctype = 'html-doctype',
  html_form = 'html-form',
  html_h1_h6 = 'html-h1-h6',
  html_height = 'html-height',
  html_image_maps = 'html-image-maps',
  html_input_checkbox = 'html-input-checkbox',
  html_input_hidden = 'html-input-hidden',
  html_input_radio = 'html-input-radio',
  html_input_reset = 'html-input-reset',
  html_input_submit = 'html-input-submit',
  html_input_text = 'html-input-text',
  html_lang = 'html-lang',
  html_link = 'html-link',
  html_lists = 'html-lists',
  html_loading_attribute = 'html-loading-attribute',
  html_mailto_links = 'html-mailto-links',
  html_marquee = 'html-marquee',
  html_meter = 'html-meter',
  html_object = 'html-object',
  html_p = 'html-p',
  html_picture = 'html-picture',
  html_pre = 'html-pre',
  html_progress = 'html-progress',
  html_required = 'html-required',
  html_role = 'html-role',
  html_rp = 'html-rp',
  html_rt = 'html-rt',
  html_ruby = 'html-ruby',
  html_select = 'html-select',
  html_semantics = 'html-semantics',
  html_small = 'html-small',
  html_span = 'html-span',
  html_srcset = 'html-srcset',
  html_strike = 'html-strike',
  html_strong = 'html-strong',
  html_style = 'html-style',
  html_svg = 'html-svg',
  html_table = 'html-table',
  html_target = 'html-target',
  html_textarea = 'html-textarea',
  html_valign = 'html-valign',
  html_video = 'html-video',
  html_wbr = 'html-wbr',
  html_width = 'html-width',
  image_avif = 'image-avif',
  image_base64 = 'image-base64',
  image_bmp = 'image-bmp',
  image_gif = 'image-gif',
  image_ico = 'image-ico',
  image_jpg = 'image-jpg',
  image_png = 'image-png',
  image_svg = 'image-svg',
  image_webp = 'image-webp',
  unsupported = 'unsupported',
}
/**
 * @export
 * @enum {string}
 */
export enum EmailFeatureOverviewCategoryEnum {
  css = 'css',
  html = 'html',
  image = 'image',
  others = 'others',
}
/**
 * @export
 * @enum {string}
 */
export enum EmailFeatureOverviewStatusesEnum {
  SUPPORTED = 'SUPPORTED',
  PARTIAL = 'PARTIAL',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  UNKNOWN = 'UNKNOWN',
}

export function EmailFeatureOverviewFromJSON(json: any): EmailFeatureOverview {
  return EmailFeatureOverviewFromJSONTyped(json, false);
}

export function EmailFeatureOverviewFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EmailFeatureOverview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    feature: json['feature'],
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    category: !exists(json, 'category') ? undefined : json['category'],
    notes: !exists(json, 'notes') ? undefined : json['notes'],
    notesNumbers: !exists(json, 'notesNumbers')
      ? undefined
      : json['notesNumbers'],
    featureStatistics: !exists(json, 'featureStatistics')
      ? undefined
      : (json['featureStatistics'] as Array<any>).map(
          EmailFeatureFamilyStatisticsFromJSON
        ),
    statuses: json['statuses'],
  };
}

export function EmailFeatureOverviewToJSON(
  value?: EmailFeatureOverview | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    feature: value.feature,
    title: value.title,
    description: value.description,
    category: value.category,
    notes: value.notes,
    notesNumbers: value.notesNumbers,
    featureStatistics:
      value.featureStatistics === undefined
        ? undefined
        : (value.featureStatistics as Array<any>).map(
            EmailFeatureFamilyStatisticsToJSON
          ),
    statuses: value.statuses,
  };
}
