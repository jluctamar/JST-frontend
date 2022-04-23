import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, OrderState } from "src/app/app-state";
import { ORDER_FEATURE_KEY } from "src/app/app.constants";

export const selectOrdersFeature = createFeatureSelector<AppState, OrderState>(ORDER_FEATURE_KEY);


export const selectCartItems = createSelector(
    selectOrdersFeature,
    (state) => state?.cartItems
)



