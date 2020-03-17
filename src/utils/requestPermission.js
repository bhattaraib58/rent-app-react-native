import { PermissionsAndroid } from 'react-native';

/**
 * Request For Loaction Permission.
 *
 * @param {*} permissionName
 * @param {*} title
 * @returns
 */
async function requestLocationPermission(permissionName, title) {
  try {
    const granted = await PermissionsAndroid.request(permissionName, {
      rationale: {
        title: title
      }
    });

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

/**
 * Check and Request Permission If Needed.
 *
 * @param {*} permissionName
 * @param {string} [title='Need Access plz give access']
 */
export async function checkPermissionAndRerequestPermissionIfNeeded(
  permissionName,
  title = 'Need Access plz give access'
) {
  const permissionStatus = await PermissionsAndroid.check(permissionName);

  if (!permissionStatus) {
    await requestLocationPermission(permissionName, title);
  }
}
