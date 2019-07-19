import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import WidgetListSingle from "./WidgetListSingle";

import * as firebase from "firebase";

function WidgetList(props) {
  const useStyles = makeStyles(theme => ({
    control: {
      padding: theme.spacing(2)
    }
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  let handleDelete = widgetId => {
    return db
      .collection("widgets")
      .doc(widgetId)
      .delete()
      .then(function() {
        alert("Widget successfully deleted!");
      })
      .catch(function(error) {
        alert("Error deleting widget: ", error);
      });
  };

  return (
    <React.Fragment>
      <Grid xs={12}>
        <Grid container spacing={4}>
          {[
            {
              title: "Pizza is awesome",
              status: "active",
              widgetType: "Popup",
              creationDate: "August 3, 2019"
            }
          ].map((x, i) => (
            <WidgetListSingle
              key={"item_" + i}
              title={x.title}
              status={x.status}
              widgetType={x.widgetType}
              creationDate={x.creationDate}
            />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default WidgetList;
