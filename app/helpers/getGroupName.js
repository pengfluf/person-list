import groupsDB from './groups';

export default function getGroupName(id, groups = groupsDB) {
  return groups.find(group => group.id === id).name;
}
