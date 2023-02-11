interface Image {
    background: string;
    clicked: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{}, {
    itemRefs: import("vue").Ref<never[]>;
    skipUnwrap: {
        itemRefs: import("vue").Ref<never[]>;
    };
    images: Image[];
    expand: (image: Image, index: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
