import React from 'react';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'add doc',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'all docs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  // {
  //   text: 'stats',
  //   path: 'stats',
  //   icon: <IoBarChartSharp />,
  // },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
