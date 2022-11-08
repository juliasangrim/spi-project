import * as React from 'react';
import '../styles/Button.css';

function EditConfiguration() {
  return (
    <div className="config-editor-container">
      <p>
        Edit default configuration
      </p>
      <p>Spring Boot</p>
      <ul>
        <li>3.0.0 (SNAPSHOT)</li>
        <li>3.0.0 (RC1)</li>
        <li>2.7.6 (SNAPSHOT)</li>
        <li>2.7.5</li>
        <li>2.6.14 (SNAPSHOT)</li>
        <li>2.6.13</li>
      </ul>
      <p>Java</p>
      <ul>
        <li>19</li>
        <li>17</li>
        <li>11</li>
        <li>8</li>
      </ul>
      <button className="btn btn-gray">Cancel</button>
      <button className="btn btn-green">Save changes</button>
    </div>
  );
}

export default EditConfiguration;
