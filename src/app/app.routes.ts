import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ControlStmtComponent } from './components/control-stmt/control-stmt.component';
import { DataBindinComponent } from './components/data-bindin/data-bindin.component';
import { LinkedSignalsComponent } from './components/linked-signals/linked-signals.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { SignalsComponent } from './components/signals/signals.component';
import { UserComponent } from './components/user/user.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveTemplateComponent } from './components/reactive-template/reactive-template.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'data-binding',
        pathMatch:'full'
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'control-stmt',
        component:ControlStmtComponent
    },
    {
        path:'data-binding',
        component:DataBindinComponent
    },
    {
        path:'linked-signals',
        component:LinkedSignalsComponent
    },
    {
        path:'signals',
        component:SignalsComponent
    },
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'ng-for',
        component:NgForComponent
    },
    {
        path:'ng-if',
        component:NgIfComponent
    },
    {
        path:'ng-style',
        component:NgStyleComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'template-form',
        component:TemplateFormComponent
    },
    {
        path:'reactive-form',
        component:ReactiveTemplateComponent
    }
];
