import { useEffect } from "react";

export const usePricingSync = (product, setProduct) => {
  const {
    originalPrice = "",
    sellingPrice = "",
    discountValue = "",
    discountType = "percentage",
    lastChanged,
  } = product;

  const sanitizeDiscount = (discount, type) => {
    let d = Math.abs(parseFloat(discount) || 0);
    if (type === "percentage") {
      if (d > 100) d = 100;
    }
    return d;
  };

  const calculatePricing = (original, discount, type) => {
    const o = parseFloat(original) || 0;
    const d = sanitizeDiscount(discount, type);
    if (type === "percentage") return o - (o * d) / 100;
    else return o - d;
  };

  const calculateDiscount = (original, selling, type) => {
    const o = parseFloat(original) || 0;
    const s = parseFloat(selling) || 0;
    if (o === 0) return 0;
    if (type === "percentage") return ((o - s) / o) * 100;
    else return o - s;
  };

  useEffect(() => {
    if (!lastChanged) return;

    let updated = {};

    if (lastChanged === "original") {
      if (discountValue) {
        updated.sellingPrice = calculatePricing(
          originalPrice,
          discountValue,
          discountType
        ).toFixed(2);
      } else if (sellingPrice) {
        updated.discountValue = calculateDiscount(
          originalPrice,
          sellingPrice,
          discountType
        ).toFixed(2);
      }
    } else if (lastChanged === "selling") {
      updated.discountValue = calculateDiscount(
        originalPrice,
        sellingPrice,
        discountType
      ).toFixed(2);
    } else if (lastChanged === "discount") {
      updated.sellingPrice = calculatePricing(
        originalPrice,
        discountValue,
        discountType
      ).toFixed(2);
    } else if (lastChanged === "discountType") {
      // 👇 ADD THIS to handle changing discountType
      if (originalPrice && discountValue) {
        updated.sellingPrice = calculatePricing(
          originalPrice,
          discountValue,
          discountType
        ).toFixed(2);
      }
    }

    setProduct((prev) => ({
      ...prev,
      ...updated,
    }));
  }, [originalPrice, sellingPrice, discountValue, discountType, lastChanged]);
};
