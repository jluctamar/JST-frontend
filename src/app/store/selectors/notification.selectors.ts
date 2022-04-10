import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, NotificationState } from "src/app/app-state";
import { NOTIFICATION_FEATURE_KEY } from "src/app/app.constants";

export const selectNotificationsFeature = createFeatureSelector<AppState, NotificationState>(NOTIFICATION_FEATURE_KEY);


export const selectErrorMsg = createSelector(
    selectNotificationsFeature,
    (state) => state?.errorMsg
)
export const selectIsNotificationDisplayed = createSelector(
    selectNotificationsFeature,
    (state) => state?.isDisplayed
)

