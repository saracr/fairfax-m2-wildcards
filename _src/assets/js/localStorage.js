'use strict';

function saveData() {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function getData() {
  return JSON.parse(localStorage.getItem('userProfile'));
}

function removeData() {
  localStorage.removeItem('userProfile');
}