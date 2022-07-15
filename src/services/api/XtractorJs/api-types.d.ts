
export type _FEMBED_DATA_SOURCES_ = Array<{ file?: string; label?: string;  type?: string; }> | string;

export type _FEMBED_ = {
  success: boolean;
  player?: {
    poster_file?: string;
    logo_file?: string;
    logo_position?: string;
    logo_link?: string;
    logo_margin?: number;
    aspectratio?: string;
    powered_text?: string;
    powered_url?: string;
    css_background?: string;
    css_text?: string;
    css_menu?: string;
    css_mntext?: string;
    css_caption?: string;
    css_cttext?: string;
    css_ctsize?: number;
    css_ctopacity?: number;
    css_ctedge?: string;
    css_icon?: string;
    css_ichover?: string;
    css_tsprogress?: string;
    css_tsrail?: string;
    css_button?: string;
    css_bttext?: string;
    opt_autostart?: boolean;
    opt_title?: boolean;
    opt_quality?: boolean;
    opt_caption?: boolean;
    opt_download?: boolean;
    opt_sharing?: boolean;
    opt_playrate?: boolean;
    opt_mute?: boolean;
    opt_loop?: boolean;
    opt_vr?: boolean;
    opt_cast?: { appid?: string; };
    opt_nodefault: boolean;
    opt_forceposter: boolean;
    opt_parameter: boolean,
    restrict_domain: string;
    restrict_action: string;
    restrict_target: string;
    resume_enable: boolean;
    resume_text: string;
    resume_yes: string;
    resume_no?: string;
    adb_enable?: boolean;
    adb_offset?: number;
    adb_text?: string;
    ads_adult?: boolean;
    ads_pop?: boolean;
    ads_vast?: boolean;
    ads_free?: 0;
    trackingId?: string;
    income?: boolean;
    incomePop?: boolean;
    logger?: string;
    revenue?: string;
    revenue_fallback?: string;
    revenue_track?: string;
  },
  data: _FEMBED_DATA_SOURCES_;
  captions?: [],
  is_vr?: boolean;
}