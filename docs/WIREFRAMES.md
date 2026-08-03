# Wireframe Specifications
## PT. Pelayaran Nasional Radhika Bahari Nusantara

> Date: 2026-08-02 | Version: 1.0.0 | Status: APPROVED

---

## 1. Services Page (/services)

### Desktop Layout (1280px)
```
+-----------------------------------------------------------------------------------+
|  [Logo Landscape]               Home  About  Services  Fleet  Routes  [Contact Us]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [Corporate Identity Badge]                                                       |
|  Our Maritime Logistics Services                                                  |
|  Reliable domestic inter-island cargo shipping across Indonesia.                  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------+ +-----------------------+ +-------------------------+  |
|  | Container Shipping    | | Bulk Cargo Logistics  | | Heavy-Lift & Project    |  |
|  | [Icon]                | | [Icon]                | | [Icon]                  |  |
|  | Dry cargo, reefers    | | Coal, steel, cement   | | Oversized machinery     |  |
|  | [Learn More ->]       | | [Learn More ->]       | | [Learn More ->]         |  |
|  +-----------------------+ +-----------------------+ +-------------------------+  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [Section Label: Workflow]                                                        |
|  Our Shipping & Handling Steps                                                    |
|                                                                                   |
|  (Step 1: Inquiry) ===> (Step 2: Quotation) ===> (Step 3: Loading) ===> (Step 4)  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Mobile Layout (375px)
```
+-----------------------------------+
| [Logo Landscape]           [Menu] |
+-----------------------------------+
|                                   |
| [Corporate Identity Badge]        |
| Our Services                      |
|                                   |
| +-------------------------------+ |
| | Container Shipping            | |
| | [Learn More ->]               | |
| +-------------------------------+ |
| | Bulk Cargo Logistics          | |
| | [Learn More ->]               | |
| +-------------------------------+ |
|                                   |
| [Workflow Steps]                  |
| 1. Inquiry                        |
| 2. Quotation                      |
| 3. Loading                        |
| 4. Delivery                       |
|                                   |
+-----------------------------------+
```

---

## 2. Fleet Page (/fleet)

### Desktop Layout (1280px)
```
+-----------------------------------------------------------------------------------+
|  [Logo Landscape]               Home  About  Services  Fleet  Routes  [Contact Us]|
+-----------------------------------------------------------------------------------+
|  Search Fleet: [ Enter vessel name... ]   Filter Type: [All / Cargo / Container]  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | Vessel Name   | Type       | DWT   | BKI Classification | Status            |  |
|  +---------------+------------+-------+--------------------+-------------------|  |
|  | MV Nusantara  | Container  | 24000 | Certified (BKI)    | [Active Badge]    |  |
|  | MV Radhika    | Bulk       | 45000 | Certified (BKI)    | [Active Badge]    |  |
|  | MV Bahari     | Bulk       | 38000 | Certified (BKI)    | [Maintenance]     |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Mobile Layout (375px)
```
+-----------------------------------+
| [Logo Landscape]           [Menu] |
+-----------------------------------+
| Filter: [All / Cargo / Container] |
|                                   |
| +-------------------------------+ |
| | MV Nusantara Indah            | |
| | Type: Container               | |
| | DWT: 24,000                   | |
| | Class: BKI Certified          | |
| | Status: [Active]              | |
| | [View Technical Specs ->]     | |
| +-------------------------------+ |
+-----------------------------------+
```

---

## 3. Fleet Detail Page (/fleet/:slug)

### Desktop Layout (1280px)
```
+-----------------------------------------------------------------------------------+
|  [Logo Landscape]               Home  About  Services  Fleet  Routes  [Contact Us]|
+-----------------------------------------------------------------------------------+
|  <- Back to Fleet Inventory                                                       |
|                                                                                   |
|  MV Nusantara Indah                                                               |
|  IMO Number: 9812739  | BKI Class: Active  | Operational Status: [Active]         |
|                                                                                   |
|  +-------------------------------------+  +------------------------------------+  |
|  | Technical Specifications            |  | Cargo Carrying Capacity            |  |
|  | - Length Overall (LOA): 185 meters  |  | - Deadweight (DWT): 24,000 tons    |  |
|  | - Draft depth: 9.5 meters           |  | - TEU Layout: 1,800 containers     |  |
|  | - Breadth: 28 meters                |  | - Recharger plugs: 150 points      |  |
|  +-------------------------------------+  +------------------------------------+  |
|                                                                                   |
|  [ Inquire Cargo Space on this Vessel Class ] -> CTA Button                       |
+-----------------------------------------------------------------------------------+
```

---

## 4. Service Detail Page (/services/:slug)

### Desktop Layout (1280px)
```
+-----------------------------------------------------------------------------------+
|  [Logo Landscape]               Home  About  Services  Fleet  Routes  [Contact Us]|
+-----------------------------------------------------------------------------------+
|  <- Back to Services                                                              |
|                                                                                   |
|  Dry Bulk Cargo Logistics                                                         |
|  High-capacity shipping for minerals, coal, agricultural grains and fertilizers.  |
|                                                                                   |
|  +-------------------------------------+  +------------------------------------+  |
|  | Handling Capabilities               |  | Equipment Specifications           |  |
|  | - Self-discharging vessel cranes    |  | - Grab-bucket capacity: 15 cbm     |  |
|  | - Dust-control holds                |  | - Loading rate: 2,000 tons/hour    |  |
|  | - Water-tight hatches               |  | - Unloading rate: 1,500 tons/hour  |  |
|  +-------------------------------------+  +------------------------------------+  |
|                                                                                   |
|  [ Request Dry Bulk Shipping Quotation ] -> CTA Button                            |
+-----------------------------------------------------------------------------------+
```
