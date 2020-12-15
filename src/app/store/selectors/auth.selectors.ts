import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, AuthState } from "src/app/app-state";
import { AUTH_FEATURE_KEY } from "src/app/app.constants";

export const selectAuthFeature = createFeatureSelector<AppState, AuthState>(AUTH_FEATURE_KEY);


export const selectIsLoggedIn = createSelector(
    selectAuthFeature,
    (state) => state?.auth?.isLoggedIn,
    (auth) => auth?.isLoggedIn
)