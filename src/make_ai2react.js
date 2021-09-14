import React from "react";
import styled from "styled-components";
import camelCase from "camelcase";

export function makeAi2React(opts = {}) {
  const { html, styles, containerId, name = containerId } = opts;

  const Wrapper = styled.div`
    ${styles}
  `;

  function Component(props) {
    const __html = typeof html === "function" ? html(props) : html;
    return <Wrapper dangerouslySetInnerHTML={{ __html }} />;
  }

  Component.displayName = camelCase(name, { pascalCase: true });

  return Component;
}
