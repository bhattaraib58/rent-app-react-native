import {PermissionsAndroid} from 'react-native';

async function requestPermission(permissionName) {
  try {
    const granted = await PermissionsAndroid.request(permissionName, {
      rationale: {
        title: 'Need Access To Location plz give access',
      },
    });

    if (granted === PermissionAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

export async function checkPermissionAndRerequestPermissionIfNeeded(
  permissionName,
) {
  let permissionStatus = await PermissionsAndroid.check(permissionName);
  if (!permissionStatus) {
    await requestPermission(permissionName);
  }
}
