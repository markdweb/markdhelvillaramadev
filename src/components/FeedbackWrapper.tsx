"use client";

import { Feedback as FeedbackUI } from "@once-ui-system/core";
import React from "react";

export type FeedbackProps = React.ComponentProps<typeof FeedbackUI>;

export function Feedback(props: FeedbackProps) {
  return <FeedbackUI {...props} />;
}
