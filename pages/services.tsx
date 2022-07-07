import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import type { NextPage } from "next";

const CustomListItem = (props: { children: ReactNode }) => (
  <ListItem>
    <Typography variant="body1">{props.children}</Typography>
  </ListItem>
);

const recurringServices = {
  websites: {
    basic: {
      title: "Basic",
      content: () => (
        <Typography variant="body1">
          <List>
            <CustomListItem>Security Monitoring</CustomListItem>
            <CustomListItem>Basic Malware Removal</CustomListItem>
            <CustomListItem>Monitoring Errors and Outages</CustomListItem>
            <CustomListItem>Software update and function checks</CustomListItem>
            <CustomListItem>Cloud Backups</CustomListItem>
            <CustomListItem>Custom Recurring Requests</CustomListItem>
          </List>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Services included:
            <Box sx={{ marginLeft: "4em" }}>2 hours website support</Box>
            <Box sx={{ marginLeft: "4em" }}>Staff phone support</Box>
            <Box sx={{ marginLeft: "4em" }}>Updates and minor additions</Box>
            <Box sx={{ marginLeft: "4em" }}>Web Developer Assistance</Box>
            <Box sx={{ marginLeft: "4em" }}>Mobile Optimization</Box>
            <Box sx={{ marginLeft: "4em" }}>Design Optimization</Box>
          </Box>
        </Typography>
      ),
      price: 200,
    },
    intermediate: {
      title: "Intermediate",
      content: () => (
        <Typography variant="body1">
          <List>
            <CustomListItem>Troubleshooting Errors and Outages</CustomListItem>
            <CustomListItem>
              Firewall Protection – Security Extras
            </CustomListItem>
            <CustomListItem>Weekly Cloud Backups </CustomListItem>
            <CustomListItem>Access to Online Piglet Pack Portal</CustomListItem>
            <CustomListItem>Manage/Maintain Multiple Websites</CustomListItem>
            <CustomListItem>
              Server and backend integration management
            </CustomListItem>
            <CustomListItem>Single Point of Contact</CustomListItem>
            <CustomListItem>Monthly Check-in Meeting</CustomListItem>
            <CustomListItem>Custom Recurring Requests</CustomListItem>
          </List>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Services included:
            <Box sx={{ marginLeft: "4em" }}>3 hours website support</Box>
            <Box sx={{ marginLeft: "4em" }}>Staff phone support</Box>
            <Box sx={{ marginLeft: "4em" }}>Updates and additions</Box>
            <Box sx={{ marginLeft: "4em" }}>
              Marketing and Analytics support
            </Box>
            <Box sx={{ marginLeft: "4em" }}>Vendor Support</Box>
            <Box sx={{ marginLeft: "4em" }}>Theme Modifications</Box>
            <Box sx={{ marginLeft: "4em" }}>Technical SEO</Box>
            <Box sx={{ marginLeft: "4em" }}>Mobile Optimization</Box>
            <Box sx={{ marginLeft: "4em" }}>Design Optimization</Box>
            <Box sx={{ marginLeft: "4em" }}>Web Developer Assistance</Box>
            <Box sx={{ marginLeft: "4em" }}>Functional Updates and changes</Box>
          </Box>
        </Typography>
      ),
      price: 350,
    },
    advanced: {
      title: "Advanced",
      content: () => (
        <Typography variant="body1">
          <List>
            <CustomListItem>Custom Server Configurations</CustomListItem>
            <CustomListItem>
              Custom Content Delivery Network management
            </CustomListItem>
            <CustomListItem>
              Multiple Backend Service Integrations
            </CustomListItem>
            <CustomListItem>Bi-Monthly Project Meetings</CustomListItem>
            <CustomListItem>Analytics Analysis</CustomListItem>
            <CustomListItem>Access to Online Portal</CustomListItem>
            <CustomListItem>Single Point of Contact</CustomListItem>
            <CustomListItem>Custom Recurring Requests</CustomListItem>
          </List>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Services included:
            <Box sx={{ marginLeft: "4em" }}>4 hours website support</Box>
            <Box sx={{ marginLeft: "4em" }}>Staff phone support</Box>
            <Box sx={{ marginLeft: "4em" }}>
              Marketing and Analytics support
            </Box>
            <Box sx={{ marginLeft: "4em" }}>Vendor Support</Box>
            <Box sx={{ marginLeft: "4em" }}>Theme Modifications</Box>
            <Box sx={{ marginLeft: "4em" }}>Technical SEO</Box>
            <Box sx={{ marginLeft: "4em" }}>Mobile Optimization</Box>
            <Box sx={{ marginLeft: "4em" }}>Design Optimization</Box>
            <Box sx={{ marginLeft: "4em" }}>Web Developer Assistance</Box>
            <Box sx={{ marginLeft: "4em" }}>Website Strategy Consulting</Box>
            <Box sx={{ marginLeft: "4em" }}>
              Planning Conversion Optimization
            </Box>
            <Box sx={{ marginLeft: "4em" }}>Search Optimization Strategy</Box>
            <Box sx={{ marginLeft: "4em" }}>Search Optimization Analysis</Box>
            <Box sx={{ marginLeft: "4em" }}>On-Page/Content Optimization</Box>
            <Box sx={{ marginLeft: "4em" }}>User Needs Analysis</Box>
            <Box sx={{ marginLeft: "4em" }}>Function/Interaction Design</Box>
          </Box>
        </Typography>
      ),
      price: 500,
    },
  },
  servers: {
    customServer: {
      title: "Custom Server, API, and Integration Services",
      price: "Starting at $350",
      content: () => (
        <Typography variant="body1">
          From Django, Express, or Flask, to NextJs, NuxtJs, Wordpress, or
          Shopify Piglet Pack can provide services to make setting up and
          maintaining these servers easy. Whether our clients want a completely
          custom set up, a content management system, or to just manage their
          own cloud drive we have experience in a versatile array of languages.
          <div style={{ height: "2em" }} />
          Often people think of applications or workflows that are only possible
          with the hosting of aa server. Whether you need a small business
          software hosted to reduce cost or need help with a hobby project we
          can simplify the process.
          <div style={{ height: "2em" }} /> Our expertise in multiple platforms
          providing content management systems, static website servers, to
          managing cloud drives prepares us to provide professional service when
          managing client APIs and servers. This service explicitly includes a
          contract for recurrent support. See further down for one time project
          services.
        </Typography>
      ),
    },
    serverless: {
      title: "Serverless Infrastructure Services",
      content: () => (
        <Typography variant="body1">
          AWS, Google Cloud Products, and Cloudflare networks can be complex to
          manage. Piglet pack can host, manage, and completely construct new web
          services with serverless infrastructure according to client wants.
          <div style={{ height: "2em" }} />
          From independent functions for small workflows, to fully distributed
          delivery systems, mailing systems, or other business software needs
          Piglet Pack has the necessary experience to design and implement
          serverless architectures. Our services can be full-fledged management
          with notifications of due charges and renewals or can be simple
          designs and help with implementations. Completely up to the client our
          services mimic the model that many cloud service providers adhere to.
        </Typography>
      ),
      price: "Varies, starting at $250",
    },
    audit: {
      title: "Digital Service Audit",
      content: () => (
        <Typography variant="body1">
          Piglet Pack has the capability to break down complex situations
          regarding digital services into actionable chunks to efficiently
          resolve issues from billing, configuration, API updates, or versioning
          errors. Whether our clients are well versed or not, they often rely on
          us to generate succinct reports on the status of digital services when
          unexpected behavior appears.
          <div style={{ height: "2em" }} />
          Breaking or not, unexpected behavior from billing issues to content
          delivery issues, can impact the performance of a client’s digital
          presence. Our digital service audits provide insight to the status and
          expected performance of various digital assets so that our clients can
          rest assured their services remain working. Simple audits can provide
          key insight to the workings, practices used, and current status of
          search engine ranking for a clients website. Further analysis can
          reveal security vulnerabilitiies and non cost-effective areas. Our
          fully detailed reports provide these insights in an effort to promote
          the best practices for our clients.
          <div style={{ height: "2em" }} />
        </Typography>
      ),
      price: "Starts at $160",
    },
  },
};
const projectServices = {
  websiteCreation: {
    title: "Website Creation and Maintenance",
    content: () => (
      <Typography variant="body1">
        We can provide website creation, update, and maintenance services to
        ensure smooth delivery of online content. Our user interface developers
        have experience with photo editing, graphic design, and numerous
        front-end languages and frameworks that enable them total creative
        freedom.
        <div style={{ height: "2em" }} />
        We can provide any degree of initial set up or routine check-ups. From
        completely initiating and creating a website for a client, to assisting
        in account creation only, we can provide any level of service necessary
        to ensure our clients website needs are met.
        <div style={{ height: "2em" }} />
        Since all of our services are provided with a service plan, we are
        always capable of advising on unsure situations to provide guidance to
        the most efficient and cost-effective solution. Our transparency in this
        process is core to the goal of our business and reflects our want to
        create a more accessible web development service provider.
      </Typography>
    ),
    price: "Starting at $400",
  },
  apiDigitalServices: {
    title: "Digital Service Integration and Development",
    content: () => (
      <Typography variant="body1">
        Choices are infinite when choosing how to distribute digital content.
        Working with hosting service providers, serverless infrastructure, or
        any cloud service can be overwhelming and frustrating.
        <div style={{ height: "2em" }} />
        Our services allow clients to focus on specific aspects of the digital
        services they utilize while Piglet Pack manages other areas that can be
        distracting and frustrating to handle. Working with any digital service
        can be simplified by describing the goal and providing us access to
        resources the client wants managed.
        <div style={{ height: "2em" }} />
        From domain renewal reminders, serverless infrastructure monitoring, or
        hosting provider monitoring, we can help. We allow clients to retain the
        exact control they desire while providing an easy solution for managing
        aspects of digital services that are too time consuming.
      </Typography>
    ),
    price: "Starting at $150",
  },
  situationalResponse: {
    title: "Situational Response and Emergency Services",
    content: () => (
      <Typography variant="body1">
        Sometimes things go wrong. Piglet Pack strives to make itself available
        for emergency and rapid repones services. While these services cost
        more, they provide immediate access to the support necessary to decipher
        and resolve sudden issues or changes in behavior in client digital
        services.
        <div style={{ height: "2em" }} />
        Our advice and support can be a determining factor in the timeline of
        resolving an issue, whether Piglet Pack implements the solution or not.
        Our services extend as far as our clients need help. Reports on
        situations that might be reported to vendors often require contextual
        evidence which can be easily collated by Piglet Pack upon inspection of
        any sudden issue.
      </Typography>
    ),
    price: "Starting at $400",
  },
  customServerSetUp: {
    title: "Custom Server Setup",
    content: () => (
      <Typography variant="body1">
        We offer project based server, API, and integration services. They mimic
        our recurrent server services but are priced differently and do not
        inherently include long term support.
        <div style={{ height: "2em" }} />
        Piglet Pack in its effort to remain flexible can perform any service as
        a one time service, or recurrent service if needed. Negotiation for
        support is also always an opt-in option to produce the easiest structure
        for our clients.
      </Typography>
    ),
    price: "starting at $400",
  },
};
const ServiceCard = (props: {
  item: { title: string; content: any; price: number | string };
}) => {
  const Content = props.item.content;
  return (
    <Card raised sx={{ padding: "1em" }}>
      <CardHeader
        title={props.item.title}
        action={
          typeof props.item.price === "number"
            ? `$${props.item.price}`
            : props.item.price
        }
      />
      <CardContent>
        <Content />
      </CardContent>
    </Card>
  );
};

export const Services: NextPage = (props: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginY: "3em",
      }}
    >
      <Box sx={{ margin: "5em" }}>
        <Typography variant="body1">
          Each category of service is listed below. Every category address a
          specific area of concern or time specific needs.
        </Typography>
      </Box>
      <Paper
        elevation={4}
        sx={{
          textAlign: "center",
          paddingLeft: "2em",
          paddingRight: "2em",
          margin: "2em",
          backgroundColor: "secondary.main",
        }}
      >
        <Typography variant="h5">Recurring Services</Typography>
      </Paper>
      <Grid container direction="row" spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage:
              "linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))",
          }}
        >
          <Typography variant="body1">For Websites</Typography>
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={recurringServices.websites.basic} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={recurringServices.websites.intermediate} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={recurringServices.websites.advanced} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <Paper sx={{ padding: "1em" }}>
              All these service come with a flexibility gurantee. If you do not
              see what you are looking for, or would like to request anything
              specific: send us a qoute!
              <div style={{ height: "2em" }} />
              We are able to accommodate most situations and our services always
              come with a service plan so we can transparently work with our
              clients.
            </Paper>
            <div
              style={{ height: "2em", border: "1px solid top", width: "100%" }}
            />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage:
              "linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))",
          }}
        >
          <Typography variant="body1">For Servers</Typography>
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={recurringServices.servers.customServer} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={recurringServices.servers.serverless} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={recurringServices.servers.audit} />
        </Grid>
      </Grid>
      <Paper
        sx={{
          padding: "1em",
          margin: "2em",
          backgroundColor: "secondary.main",
        }}
      >
        <Typography variant="h5">Project Based Services</Typography>
      </Paper>
      <Grid
        spacing={2}
        justifyContent="center"
        direction="row"
        container
        alignItems="stretch"
      >
        <Grid item xs={4}>
          <ServiceCard item={projectServices.websiteCreation} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={projectServices.apiDigitalServices} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={projectServices.situationalResponse} />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard item={projectServices.customServerSetUp} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
