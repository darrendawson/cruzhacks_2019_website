/*
  Ustra: Universal Source of Truth for React Apps

  Ustra is a class that makes storing state and cross-component variables easy.
  -> Ustra sits on the App.state spine of the app.
*/


import React from 'react';

class Ustra {

  constructor(object) {
    this.truth = object;
    this.path_lookup = this.create_path_lookup(object);
  }


  // Paths ---------------------------------------------------------------------
  /*
    - Paths are a way to get to a specific location in an object
    - A Path Lookup table is of form:
          - {path_tag: [list of path_tags required to get here]}

    - this is used for easy traversal of the object,
          - only one path tag is required -> the full patch is fetched

    Limitations:
    - requires that path_tags are unique across the entire object
  */


  // Function calls assign_paths to create a lookup table for paths
  create_path_lookup(object) {
    return this.assign_paths(object, [], {});
  }


  // Recursive (depth first) function that creates a list of paths for traversing nested objects
  assign_paths(object, current_path, total_path) {

    for (const [key, value] of Object.entries(object)) {

      let new_path = current_path.slice();    // create a clone of current path
      new_path.push(key);                     // add current place to path
      total_path[key] = new_path;             // log we've been here

      // if there's another object, go to it recursively
      if (typeof(value) === 'object') {
        total_path = this.assign_paths(value, new_path, total_path);
      }
    }

    return total_path;
  }


  // Update --------------------------------------------------------------------
  /*
    - Functions for updating truth
  */


  update(value, path_tag) {
    let full_path = this.path_lookup[path_tag].slice(); // slice makes a copy
    let updated_truth = this.update_recursive(value, this.truth, full_path);
    this.truth = updated_truth;
    return updated_truth;
  }


  // recursive function for updating a value in truth
  update_recursive(value, obj, path) {

    // if we've reached the end, bubble up
    if (path.length === 0) {
      return value;
    }

    // update the current object by updating the next one
    let next_path = path.shift();
    obj[next_path] = this.update_recursive(value, obj[next_path], path);
    return obj;
  }

  // Get -----------------------------------------------------------------------
  /*
    - Functions for getting info from truth
  */

  get_truth() {
    return this.truth;
  }
}

export default Ustra;
