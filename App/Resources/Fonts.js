import { getHeight } from "../Utils/size"

const family = {
}

const size = {
    s10: getHeight(10),
    s14: getHeight(14),
    s15: 15,
    s16: getHeight(16),
    s17: 17,
    s18: getHeight(18),
    s20: getHeight(20),
    s22: 22,
    s23: 23,
    s24: getHeight(24),
    s32: getHeight(32),
    s42: getHeight(42)
}

const style = {
    regular_10: {
        fontSize: size.s10,
    },
    regular_14: {
        fontSize: size.s14,
    },
    regular_16: {
        fontSize: size.s16,
    },
    regular_18: {
        fontSize: size.s18,
    },
    regular_20: {
        fontSize: size.s20,
    },
    regular_24: {
        fontSize: size.s24,
    },
}

export default {
    family,
    size,
    style
}