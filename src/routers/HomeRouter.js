import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { YogaScreen } from '../components/YogaScreen';
import { MeditationScreen } from '../components/MeditationScreen';
import { AddEntry } from '../components/admin/AddEntry';

export const HomeRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/yoga' component={YogaScreen} />
        <Route exact path='/meditation' component={MeditationScreen} />
        <Route exact path='/addEntry' component={AddEntry} />
        <Route exact path='/' component={HomeScreen} />
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
};
