import { Injectable } from '@angular/core';
import { Language } from './forum.models';

import { AppStateModel } from '../app-state-model.interface';
import { SettingsStateModel } from './settings-state-model.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }
}



export class SetLanguage {
  static readonly type = '[User] Set Language';

  constructor(public language: Language) {}
}


export const getSettingsState = (appState: AppStateModel): SettingsStateModel =>
  appState.settings;

export const getLanguage = (appState: AppStateModel) =>
  getSettingsState(appState).language;

export const getUuid = (appState: AppStateModel) =>
  getSettingsState(appState).uuid;
