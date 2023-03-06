/**! Reveal Embed - Client side component - Dotnet distribution - v.1.3.0 */
$.ig=$.ig||{},$.ig.datalayer=$.ig.datalayer||{},$.ig.datalayer.strings={DatabasesGroupLabel:"데이터베이스",date:"날짜",day:"일",ExpErrorFunctionNotFound:'#NAME "{0}"',ExpErrorWrongParameterCount:"함수 {0}에 제공된 매개 변수의 숫자가 잘못되었습니다",ExpHelpDate:"지정된 년, 월, 일, 시, 분, 초로 날짜 설정을 반환합니다. 인수는 옵션입니다.",ExpHelpDay:"1~31의 숫자로 월의 일을 반환합니다.",ExpHelpHour:"0~23의 숫자로 날짜 또는 시간의 시를 반환합니다.",ExpHelpIf:"논리 테스트의 결과에 따라 두 값 중 하나를 반환합니다.",ExpHelpMillisecond:"0~999의 숫자로 날짜 또는 시간의 밀리초를 반환합니다.",ExpHelpMinute:"0~59의 숫자로 날짜 또는 시간의 분을 반환합니다.",ExpHelpSecond:"0~59의 숫자로 날짜 또는 시간의 초를 반환합니다.",ExpHelpTime:"지정된 시, 분, 초, 밀리초로 시간 설정을 반환합니다. 인수는 옵션입니다.",hour:"시",logical_test:"논리 테스트",millisecond:"밀리초",minute:"분",month:"월",number:"숫자",second:"초",TablesGroupLabel:"태블릿",value:"값",value_if_false:"false인 경우의 값",value_if_true:"true인 경우의 값",ViewsGroupLabel:"보기",year:"년",ExpErrorParameterNotSet:'매개 변수 "{0}"이 설정되지 않았습니다',ExpCategoryDate:"날짜",ExpCategoryInformation:"정보",ExpCategoryLogic:"논리",ExpHelpEmpty:"EMPTY 값을 반환합니다.",ExpHelpIsempty:"값이 비어 있으면 1을, 그렇지 않으면 0을 반환합니다.",ExpHelpTrim:"선행 및 후행 공백이 제거된 것을 제외하고 지정된 텍스트 문자열과 동일한 신규 텍스트 문자열을 반환합니다.",ExpHelpAnd:"인수가 0이 아닌 경우, 1을 반환합니다. 인수의 임의의 수를 받을 수 있습니다.",ExpHelpFalse:"false의 논리 값 0을 반환합니다.",ExpHelpNot:"제공된 값이 0이면 1을, 1이면 0을 반환합니다.",ExpHelpOr:"인수 중 하나 이상이 1이면 1을, 그렇지 않으면 0을 반환합니다. 인수의 임의의 수를 받을 수 있습니다.",ExpHelpTrue:"true의 논리 값 1을 반환합니다.",ExpHelpMonth:"1~12의 숫자로 날짜의 월을 반환합니다.",ExpHelpYear:"날짜의 년을 반환합니다.",ExpHelpNow:"현재 날짜와 시간을 반환합니다.",ExpHelpToday:"현재 날짜를 반환합니다.",ExpHelpQuarter:"1~4의 숫자로 날짜의 분기를 반환합니다.",ExpHelpWeekday:"1~7의 숫자로 주의 일을 반환합니다.",ExpHelpFyear:"날짜의 회계 연도를 반환합니다(예: FY 2012).",ExpHelpWeeknum:"1~56의 숫자로 날짜의 주의 수를 반환합니다.",ExpHelpMonthname:"날짜에서 월 이름을 반환합니다. 'locale' 인수는 옵션입니다.",ExpHelpMonthshortname:"짧은 형식의 날짜에서 월 이름을 반환합니다. 'locale' 인수는 옵션입니다.",ExpHelpDatevalue:"지정된 텍스트에서 구문 분석된 날짜를 반환하며, 날짜는 두 번째 매개 변수의 형식에 따라 구문 분석됩니다. 로케일은 locale의 두 문자 식별자입니다. 형식 및 로케일은 옵션 인수입니다.",ExpHelpFormatdate:"지정된 형식의 날짜를 가진 텍스트를 반환합니다. 'locale' 인수는 옵션입니다.",locale:"locale",text:"text",MYSQL:"MySQL",SQLSERVER:"Microsoft SQL 서버",length:"길이",ExpHelpAverage:"모든 행에서 평균 결과 값을 반환합니다.",ExpHelpAverageif:"논리 테스트가 true인 모든 행에서 평균 결과 값을 반환합니다.",ExpHelpConcatenate:"여러 텍스트 문자열을 결합하여 텍스트 문자열을 반환합니다. 인수의 임의의 수를 받을 수 있습니다.",ExpHelpFind:"다른 텍스트 문자열 내의 한 텍스트 문자열의 시작 위치를 반환합니다.",ExpHelpLen:"텍스트 문자열의 문자 수를 반환합니다.",ExpHelpLower:"모든 대문자를 소문자로 변환합니다.",ExpHelpMid:"지정된 텍스트 문자열의 하위 문자열을 반환합니다.",ExpHelpReplace:"지정된 텍스트 문자열이 다른 것으로 교체된 텍스트 문자열을 반환합니다.",ExpHelpSortinterval:"값을 해당 범위로 정렬합니다. 'NN [from, to]' 형식의 문자열을 반환합니다.",ExpHelpUpper:"모든 소문자를 대문자로 변환합니다.",find_text:"텍스트 찾기",format:"형식",new_text:"신규 텍스트",old_text:"이전 텍스트",start:"시작",start_number:"시작 번호",within_text:"텍스트 내",ExpHelpCount:"행수를 반환합니다.",ExpHelpCountif:"논리 테스트가 true인 행수를 반환합니다.",ExpHelpExp:"e의 지정된 숫자의 제곱으로 반환합니다.",ExpHelpIsdate:"지정된 값이 날짜이면 1을, 그렇지 않으면 0을 반환합니다.",ExpHelpIsdatetime:"지정된 값이 날짜이면 1을, 그렇지 않으면 0을 반환합니다.",ExpHelpIsnumber:"지정된 값이 숫자이면 1을, 그렇지 않으면 0을 반환합니다.",ExpHelpIstext:"지정된 값이 텍스트 문자열이면 1을, 그렇지 않으면 0을 반환합니다.",ExpHelpIstime:"지정된 값이 시간이면 1을, 그렇지 않으면 0을 반환합니다.",ExpHelpLog:"지정된 기준으로 숫자 로그를 반환합니다. 기본 인수가 지정되지 않으면 10이 상정됩니다.",ExpHelpLog10:"기본 10에서 숫자 로그를 반환합니다.",ExpHelpMax:"모든 행에서 최대 결과 값을 반환합니다.",ExpHelpMaxif:"논리 테스트가 true인 모든 행에서 최대 결과 값을 반환합니다.",ExpHelpMin:"모든 행에서 최소 결과 값을 반환합니다.",ExpHelpMinif:"논리 테스트가 true인 모든 행에서 최소 결과 값을 반환합니다.",ExpHelpMod:"정수 나눗셈의 나머지를 반환합니다.",ExpHelpPrevious:"이전 행에서 계산되어진 지정된 식의 결과를 반환합니다. 첫 번째 행에 값을 지정할 수 있습니다.",ExpHelpRand:"0~1 사이의 임의의 수를 반환합니다.",ExpHelpRandbetween:"지정된 두 매개 변수 사이의 정수를 반환합니다. 반환된 숫자는 균일하게 분포되어 있습니다.",ExpHelpRow:"현재 행수를 반환합니다.",ExpHelpSign:"숫자가 음수이면 -1을, 0이면 0을, 양수이면 +1을 반환합니다.",ExpHelpSqrt:"지정된 숫자의 제곱근을 반환합니다.",ExpHelpStdev:"모든 행에서 결과 값의 표준 편차를 반환합니다.",ExpHelpStdevif:"논리 테스트가 true인 모든 행에서 결과 값의 표준 편차를 반환합니다.",ExpHelpSum:"각 행의 결과 값을 추가합니다.",ExpHelpSumif:"논리 테스트가 true인 각 행의 결과 값을 추가합니다.",ExpHelpTrunc:"숫자의 정수 부분을 반환합니다.",ExpHelpVar:"모든 행에서 결과 값의 변동을 반환합니다.",ExpHelpVariable:"지정된 전역 변수의 값을 반환합니다.",ExpHelpVarif:"논리 테스트가 true인 모든 행에서 결과 값의 변동을 반환합니다.",ExpHelpAbs:"숫자의 절대값을 반환합니다.",ExpHelpFquarter:"지정된 날짜에 대한 회계 연도의 분기를 반환합니다.",bottom:"맨 아래",divisor:"제수",expression:"식",first_value:"첫 번째 값",if_condition:"if-조건",log_base:"기준",logical1:"논리1",logical2:"논리2",name:"이름",top:"맨 위",FYExpression:"FY {0}",DYNAMICS_CRM:"Microsoft 다이내믹스 CRM",ExpCategoryLookupandreference:"조회 및 참조",ExpCategoryMath:"수학",ExpCategoryString:"문자열",ExpCategoryAggregation:"집합",SALESFORCE:"세일즈포스",grand_total:"총계",CSVLOCALFILEPROVIDER:"CSV",EXCELLOCALFILEPROVIDER:"엑셀",GOOGLE_ANALYTICS:"Google 분석",ProfilesGroupLabel:"프로파일",InMemory:"메모리 안",APPFIGURES:"앱피겨",ODATAPROVIDER:"OData",OData_BadServiceUrl:"제공된 URL은 유효한 OData 서비스가 아닙니다.",OData_VersionNotSupported:"OData 버전 {0}은 지원되지 않습니다.",datetime:"datetime",Total_CountRows:"{0} 총계",Total_CountNonEmpty:"{0} 총계",Total_CountDistinct:"{0} 총계",Total_Min:"{0} 최소",Total_Max:"{0} 최대",Total_Sum:"{0} 합계",Total_Avg:"{0} 평균",Total_StDev:"{0} 표준 개발",Total_Variance:"{0} 변화",IsOutlier:"이상치입니다.",PageNumberOfTotal:"[TotalPages] 의 [Page #] 페이지",INCIDENTS:"사건",LEADS:"리드",OPPORTUNITIES:"기회",OPPORTUNITIES_PRODUCTS:"기회 제품",TASKS:"작업",Salesforce_ShowMe:"보여주세요.",Salesforce_AllTime:"모든 시간",Salesforce_NeedsAuthentication:"세일즈포스 인증에 실패했습니다. 다시 로그인하십시오.",ErrorFromProvider:"{0} 의 오류 : {1}",QuarterShortText:"Q{0}",SemesterShortText:"반 년{0}",FYQuarterExpression:"회계 연도 {0} -분기 {1 }",FYSemesterExpression:"회계 연도 {0} -반기 {1 }",ExpHelpFsemester:"지정된 날짜의 회계 연도를 반환합니다.",ExpHelpSemester:"학기 날짜를 1에서 2 사이의 숫자로 반환합니다.",GoogleAds_InvalidSelectionForAggregation:"값 집계시 잘못된 결과를 피하려면 리소스에서 {0} 차원을 추가하세요. {1}",ToShowTheseDimensionsOtherIsRequiredPart1:"선택한 측정 기준을 표시하려면 %@도 추가하세요.",ToShowTheseDimensionsOtherIsRequiredPart2_Many:"다음 중 하나: %@",ToShowTheseDimensionsOtherIsRequiredPart2_One:"%@",FacebookApiMessageCode100:"이 쿼리는 실패했습니다. Facebook 은 이러한 측정 기준, 측정 항목 및 필터 조합을 지원하지 않을 수 있습니다. 자세한 내용은 다음 오류 메시지를 확인하시기 바랍니다: %@",AMAZON_REDSHIFT:"Amazon Redshift",Athena_InvalidLocation:"쿼리 결과 위치가 제공되지 않았습니다. 쿼리 결과 위치는 워크그룹 결과 설정이나 제공값으로 결정됩니다.",GOOGLE_ADS:"Google 광고",SSAS_AUTHENTICATION_FAILED:"사용자 {1 }\\{2 } 에 대한 {0} 인증에 실패했습니다.",SSAS_REQUIRED_LOGIN:"SSAS는 사용자 및 비밀번호가 필요합니다.",ExpHelpDatetimefromunixts:"지정된 Unix 타임스탬프에 대한 날짜 시간 값을 반환합니다 (밀리 초).",logical:"논리",millis:"밀리 초",ExpHelpApplytimezone:"지정된 시간대에 대한 날짜 매개 변수의 년, 월, 일, 시, 분, 초로 설정된 날짜를 반환합니다.",ExpHelpCurrenttimezone:"요청한 사용자의 시간대를 반환합니다",Salesforce_InvalidField:"There is some invalid field in your query, or the user {0} does not have permissions to access it."},$.ig=$.ig||{},$.ig.em=$.ig.em||{},$.ig.em.strings={Continue:"계속",Create:"생성",Done:"완료",Password:"비밀번호",Required:"필수",SignIn:"로그인",Author:"작성",Cancel:"취소",Error:"오류",Files:"파일",Item:"항목",Items:"항목",Preview:"미리 보기",Search:"검색",SpreadSheets:"스프레드 시트",Copy:"복사",Delete:"삭제",NoFilesFoundText:"흠. 콘텐츠가 보이지 않습니다",Ok:"OK",Rename:"이름 변경",Settings:"설정",DYNAMICSCRM:"Microsoft Dynamics CRM",AreYouSure:"괜찮습니까?",URL:"URL",Title:"제목",Dashboard:"대시보드",EnterTitle:"제목 입력",All:"모두",Apply:"적용",CustomDateRange:"사용자 날짜 범위",LastMonth:"지난 30 일",LastWeek:"지난 7일",LastYear:"지난 365일",LowerAllSelected:"모두 선택됨",LowerItems:"항목",LowerSelected:"선택됨",LowerShowAll:"모두 보기",MonthToDate:"월간 누계",QuarterToDate:"분기 누계",Today:"오늘",YearToDate:"연 누계",Yesterday:"어제",LowerItem:"항목",From:"로부터",Next:"다음",Previous:"이전",LowerTo:"에",Remove:"제거",Clear:"제거",ThisMonth:"이번 달",Select:"선택",None:"없음",EmtpyDashboardRepositorySubTitle:"완벽한 조화로 모든 데이터를 시각화",EmtpyDashboardRepositoryTitle:"첫 번째 비주얼라이제이션 추가",CloudFileRequestAccess:"작성자에게 액세스 권한 요청",ExcelSheets:"시트",SelectDataForVis:"이 비주얼라이제이션에 사용할 데이터를 선택합니다",SelectTableForVis:"이 비주얼라이제이션에 사용할 데이터가 있는 테이블을 선택합니다",SetupSpreadsheet:"스프레드 시트 설정",TheFirstRowHasTitles:"첫 번째 행에 라벨이 있음",VisualizationData:"비주얼라이제이션 데이터",Auto:"자동",Edit:"편집",Fields:"필드",ChartTrendline:"차트 추세선",ShowLegend:"범례 보기",ShowTitle:"제목 보기",StartColor:"시작 컬러",ZoomEnabled:"줌 사용",AdjustImageSize:"이미지 크기 조정",PercentageDistribution:"백분율 분포",ContentManagers:"콘텐츠 관리자",DataInDashboard:"대시보드의 데이터",ViewChart:"차트 보기",ViewData:"데이터 보기",AccountDetails:"계정 세부",AccountNameIsNotUnique:"해당 계정 이름은 이미 사용 중입니다. 다른 계정 이름으로 시도해 보십시오.",Save:"저장",LoginAnon:"익명 사용자로 로그인",NoAccount:"계정 없음",SelectAccount:"계정 선택",Domain:"도메인",Name:"이름",Username:"사용자 이름",UsernameHint:"사용자 또는 도메인 %@ 사용자",SessionToken:"세션 토큰",AccessKey:"액세스 키",SecretKey:"비밀 키",SetupCSV:"CSV 설정",SetupEntity:"엔터티 설정",SetupImage:"이미지 설정",SetupDocument:"문서 설정",LoadData:"데이터 로딩",LoadImage:"이미지 로딩",LoadDocument:"문서 로딩",Image:"이미지",Line:"선",Map:"맵",Scatter:"분산",Aggregation:"집합",Asc:"오름차순",Avg:"평균",ConditionalFormatting:"조건부 서식",CountDistinct:"고유 행 수",CountNonEmpty:"비어 있지 않은 행 수",CountRows:"행 수",Currency:"통화",Desc:"내림차순",EditFieldName:"필드 이름 편집",FieldSettings:"필드 설정",Formatting:"서식",FractionDigits:"분수 자릿수",General:"일반",LargeNumberFormatting:"큰 숫자 서식",Max:"최대",Min:"최소",NegativeNumbers:"음수",Number:"숫자",Percent:"퍼센트",Sorting:"정렬",StDev:"표준 편차",Sum:"합계",ThousandsSeparator:"1000 단위 구분",Type:"형식",UpdateField:"필드 업데이트",Variance:"변화",SetupDatabase:"데이터베이스 설정",SetupData:"데이터 설정",DataFilters:"데이터 필터",ErrorGettingAccounts:"계정을 가져오는 중에 오류가 발생했습니다. 지원센터에 문의해 주십시오.",AccountSavedErrorMessage:"계정 인증 정보를 저장할 수 없음: {0}",NewDataSource:"신규 데이터 소스",AddNewSQL:"새로운 SQL 서버 추가",AddNewMySQL:"MySQL 데이터베이스 추가",AddNewSSAS:"신규 Microsoft 분석 서버 추가",AddNewOData:"신규 OData 피드 추가",ConfigureDbConnection:"데이터베이스 연결 구성",ConfigureDataConnection:"데이터 연결 구성",SqlDatabase:"데이터베이스",SqlHost:"서버",SqlHostHint:"호스트명 또는 IP 주소",SqlPort:"포트",ConfigureResource:"리소스 구성",ConfigureUrlEndpoint:"서비스 구성",UrlEndpoint:"URL",UrlEndpointHint:"URL 주소",ClearAll:"모두 제거",SqlStoredProcs:"저장 방법",SqlTables:"태블릿",SqlViews:"보기",GetDatabases:"데이터베이스 가져오기",LoadingDatabases:"데이터베이스 로딩",GetOrganizations:"구성 가져오기",LoadingOrganizations:"구성 로딩",SqlStoredProcParamsMessage:"이 저장 방법을 사용하려면 먼저 몇 가지 사항을 설정해야 합니다",AxisBounds:"축 경계",AxisBoundsTooltip:"%@(0 또는 음수 값)을 사용하려면 숫자를 입력하거나 비워 둡니다",Axis:"축",DateFieldsAlignment:"날짜 필드 정렬",FixFirstColumn:"첫 번째 열 고정",FontSize:"폰트 크기",Linear:"선형",Logarithmic:"로그",NumberFieldsAlignment:"숫자 필드 정렬",ShowGrandTotals:"총계 보기",TextFieldsAlignment:"문자 필드 정렬",FilterByRule:"규칙별 필터",FilterEmptyValues:"필터 빈 값",Filters:"필터",SelectValues:"값 선택",AboveAverage:"평균 이상",AboveEqualsValue:"이상 또는 같음",AboveValue:"이상",BelowAverage:"평균 이하",BelowEqualsValue:"이하 또는 같음",BelowValue:"이하",BottomItems:"맨 아래 항목",BottomPercent:"맨 아래 퍼센트",Contains:"포함",EndsWith:"마지막",IsEqual:"같음",NextMonth:"다음 달",NextQuarter:"다음 분기",NextYear:"다음 해",NotContains:"포함하지 않습니다",NotEquals:"같지 않습니다",PreviousMonth:"이전 달",PreviousQuarter:"이전 분기",PreviousYear:"이전 해",StartsWith:"시작",ThisQuarter:"이번 분기",ThisYear:"올해",TopItems:"맨 위 항목",TopPercent:"맨 위 퍼센트",SliceLabel:"조각 라벨",StartPosition:"시작 위치",Percentage:"백분율",Value:"값",OptionalValue:"옵션 값",ValueAndPercentage:"값 및 백분율",Limits:"제한",LimitsTooltip:"%@을 사용하려면 숫자를 입력하거나 비워 둡니다",MaximumValue:"최대값",MaxValue:"최대값",MinimumValue:"최소값",MinValue:"최소값",Color:"컬러",ComparisonType:"값 비교 형식",InvalidBounds:"무효한 경계",MaxMustBeGreaterThanMin:"최대값은 최소값보다 커야 합니다",ShapeIndicator:"인디케이터",WhenValueAndParam:"그리고 %@",WhenValueIsParam:"값이 %@인 경우",CurrencySymbol:"통화 기호",LargeNumberFormattingSub:"수백만/수천을 나타내는 M/K 기호 사용",Enabled:"사용",AddNewSharePoint:"신규 SharePoint 사이트 추가",ConfigureYourConnection:"연결 구성",AxisBoundsMaxTooltip:"%@(최대값)을 사용하려면 숫자를 입력하거나 비워 둡니다",DateFormat:"날짜 형식",AddVisualizationFilter:"비주얼라이제이션 필터 추가",Add:"추가",AddHierarchy:"계층 추가",RefreshByHour:"1시간에 한 번",RefreshByDay:"1일에 한 번",RefreshByWeek:"1주에 한 번",RefreshEveryTimeIsOpened:"항상",AddGlobalFilter:"글로벌 필터 추가",Redo:"다시 실행",Refresh:"새로고침",RefreshData:"데이터 리프레시",LastSync:"마지막 동기화: {0}",NeverSynced:"동기화 안 함",AllowAccess:"액세스 허용",AllowAccessDesc:"이 대시보드에 액세스 권한이 있는 사람과 이 파일을 공유합니다",AllowAccessTooltip:"사용자가 이 데이터 소스로 시각화를 적절히 볼 수 있도록 공유 가능한 링크를 작성합니다. 이 링크는 서버에 암호화되어 저장되며 다른 사람과 공유되지 않습니다.",CheckFileAccess:"파일 액세스 확인",LearnMore:"자세히 알아보기",DisplayDateTimeFormat:"MMM d, yyyy @ HH:mm",SaveAs:"저장",Theme:"테마",Undo:"무효화",UseThisAccount:"이 계정 사용",ModifyAndUse:"수정 및 사용",CreateAndUse:"생성 및 사용",ChooseAccount:"계정 선택",Choose:"선택...",April:"4월",August:"8월",December:"12월",February:"2월",FiscalYearInitialMonth:"회계 연도 – 첫 달",July:"7월",June:"6월",March:"3월",May:"5월",November:"11월",October:"10월",September:"9월",AreYouSureYouWantToDeleteX:'"%@" 를 삭제하시겠습니까?',Connect:"연결",Disconnect:"연결 해제",EditVisualizationTitle:"비주얼라이제이션 제목 편집",Duplicate:"중복",UpdateFilter:"필터 업데이트",Filter:"필터",FilterType:"필터 형식",Values:"값",VisualizationFilter:"비주얼라이제이션 필터",GetFilterDataError:"필터 데이터를 로딩할 수 없습니다",Data:"데이터",EditDataSource:"데이터 소스 편집",To:"에",Accounts:"계정",DataSourceAccount:"데이터 소스 계정",EditSharePoint:"SharePoint 사이트 편집",EditSQL:"SQL 서버 편집",EditMySQL:"MySQL 편집",EditSSAS:"Microsoft 분석 서비스 편집",EditOData:"OData 편집",EditWebResource:"웹 리소스 편집",AddNewWebResource:"신규 웹 리소스 추가",AccountVerificationFailed:"확인 실패",AccountVerificationFailedMessage:"이 자격은 {0}에서 작동하지 않습니다",VerifyingCredentials:"자격 확인 중...",SavingCredentials:"인증 정보 저장 중...",DeleteAccount:"계정 삭제",ChangeVisualization:"차트 유형",ChangeVisualizationDescription:"비주얼라이제이션에 따라 필요한 필드가 표시됩니다",Discard:"취소",SaveMessage:"%@에 저장되지 않은 변경이 있습니다",UnsavedChanges:"변경을 저장합니까?",Gauges:"게이지",GeneralVisualizations:"비주얼라이제이션",Maps:"맵",MostPopular:"인기 있는 컴포넌트",Help:"도움말",OrOtherAccount:"또는 다른 계정",UseWindowsCredentials:"Windows 인증 사용",WindowsCredentials:"Windows 인증",SelectARule:"규칙 선택",AllTime:"모든 시간",Rule:"규칙",Category:"카테고리",Financial:"금융",Grids:"그리드",Other:"기타",CreateLink:"링크 생성",Links:"링크",NewLink:"신규 링크",LinkHeader:"대시보드 또는 URL에 연결",LinkSubHeader:"다른 대시보드 또는 URL에 대한 링크를 설정하여 비주얼라이제이션을 연결할 수 있습니다",ItemsPerPage:"페이지당 항목",SetupSharePointList:"SharePoint 목록을 설정합니다",SetupSharePointLibrary:"SharePoint 라이브러리 설정",SharePointView:"SharePoint 보기",AddFilter:"필터 추가",AddDashboardFilter:"대시보드 필터 추가",AddDateFilter:"날짜 필터 추가",CreateFilter:"필터 생성",EditFilterName:"필터 이름 편집",FilterName:"필터 이름",NumberOfConnectedVisualizations:"{0}/{1} 연결된 비주얼라이제이션",DashboardFilter:"대시보드 필터",DateFilter:"날짜 필터",DuplicatedDataSourceMessage:'이 데이터 소스는 "{0}" 과 동일한 정보를 포함하고 있습니다. 수정하거나 기존의 것을 사용하십시오.',SelectDashboard:"대시보드 선택",DashboardName:"대시보드 이름",DisplayLink:"링크 이름",OpenText:"열기",EditFilterConnection:"필터 연결 편집",EditFilterConnectionSubtitle:"필터의 필드에 연결하기 위해 비주얼라이제이션에서 필드 또는 매개 변수를 선택합니다",Operator:"연산자",Visualization:"비주얼라이제이션",Disabled:"기능 멈춤",DisplayedField:"필드 표시",Hierarchy:"계층",SelectAField:"필드 선택",CurrentDashboardFilters:"현재 대시보드 필터",DashboardFilters:"대시보드 필터",EditConnection:"연결 편집",FixedValue:"값 고정",SelectAFilter:"필터 값 선택",SelectAFilterSubText:"%P 대시보드 필터에 설정할 값을 선택합니다",SelectValue:"값 선택...",ThisDashboard:"이 대시보드",TypeAValue:"값 형식",VisualizationValue:"비주얼라이제이션 값",EnterFixedValue:"고정된 값 입력",OnClickFriendly:"값이 선택됩니다",OnMaximizeFriendly:"비주얼라이제이션이 최대화됩니다",SaveLink:"링크 저장",TriggerAction:"트리거",AddHierarchyMessage:"필터에 대한 여러 수준의 탐색을 설정합니다",EnableHierarchy:"계층 사용",FilterData:"필터 데이터",Multiple:"다중",MultipleSelection:"복수 선택",MultipleSelectionMessage:"동시에 많은 필터를 선택합니다",Parameters:"매개 변수",Input:"입력",Output:"출력",RequiredSelection:"필수 선택",RequiredSelectionMessage:"항상 하나의 필터가 선택되어 있어야 합니다",Single:"싱글",ChangeAnyway:"모든 방법으로 변경합니다",ChangeTheData:"데이터를 변경하시겠습니까?",ChangeTheDataMessage:"계속을 결정하면 편집기의 모든 데이터가 손실됩니다. ",EditDataSourceMessage:"이 데이터 소스에 연결된 비주얼라이제이션은 변경에 영향을 받으며 제대로 작동하지 않을 수 있습니다.\n\n확실하지 않은 경우, 대신에 신규 데이터 소스를 생성해 보십시오.",FilterValuesUnusable:"일부 필터 값은 사용할 수 없습니다",MaximizeOneLink:"하나의 링크만 사용하여 최대화합니다",EditLink:"링크 편집",NavigateToURL:"URL 탐색",URLHelp:"URL 입력. [ ] 를 사용하여 변수를 추가합니다.",LinkNameHelp:"링크 이름을 입력합니다. [ ] 를 사용하여 변수를 추가합니다.",Between:"사이",URLWarning:"URL에 무효한 변수가 있습니다",ChangeDataSource:"데이터 소스 변경",SetupDataSource:"데이터 소스 설정",ActionNotAvailableInEditor:"편집기에 있는 작업은 사용할 수 없습니다. 종료하고 다시 시도해 보십시오.",SetParameterMessage:"이 매개 변수에 대한 값 선택",AddNewOracle:"신규 오라클 추가",EditOracle:"오라클 편집",EmptyLinksHelp:"이 비주얼라이제이션을 다른 대시보드 또는 URL에 연결합니다",Selection:"선택",ConnectionMode:"연결 모델",DataFilter:"데이터 필터",SearchValues:"값 검색",EntitySets:"엔티티 세트",Objects:"객체",Functions:"기능",ODataParamsMessage:"이 기능을 사용하려면 먼저 몇 가지 사항을 설정해야 합니다",NoDataSources:"데이터 소스가 아직 없습니까?",NoDataSourcesSubTitle:"작업을 시작하기 위해 데이터 소스를 추가합니다",NoAccessDataTitle:"%@ 에 액세스 권한이 없습니다",ConnectDatasource:"데이터 소스 연결",ProviderCurrentlyNotWebSupported:"%@ 은(는) %P 웹에서 지원할 예정입니다.",UseDesktopMobileVersionForVisualizationTemp:"그 전까지는 데스크톱 또는 모바일 버전을 사용하여 비주얼라이제이션을 보십시오",UseDesktopMobileVersionForVisualization:"데스크톱 또는 모바일 버전을 사용하여 비주얼라이제이션을 보십시오",HostUnreachableOnWeb:"%P 웹에서 %@ 에 연결할 수 없습니다",ResourceUrlNotFound:"%@에서 리소스를 찾을 수 없습니다",AutoLayout:"자동 레이아웃",AutoLayoutTooltip:"자동 레이아웃 모드는 꺼짐입니다",WidgetEditorEmptyStateSubtitle:"다음은 버킷에 필드를 드래그 앤 드롭하여 시각화 구축을 시작합니다.",WidgetEditorEmptyStateTitle:"차트 유형 선택",RuleValue:"규칙값",AddNewPostgres:"신규 포스트그레스 서버 추가",EditPostgres:"포스트그레스 편집",AddNewSybase:"신규 사이베이스 서버 추가",EditSybase:"사이베이스 편집",Order:"순서",InvalidDsUrl:"URL이 %@에 유효하지 않습니다",FileNotFoundTitle:"이 데이터에 접근할 수 없으며, %@을 찾을 수 없습니다",SparklinesDifference:"차이",UpdateBinding:"연결 업데이트",Arrow:"화살표",Bold:"볼드",BorderColor:"테두리 컬러",BorderWidth:"테두리 너비",FillColor:"컬러 채우기",FontWeight:"폰트 두께",Freehand:"프리핸드",Opacity:"불투명도",Oval:"타원형",PickATool:"도구 선택",Rectangle:"사각형",Regular:"보통",StrokeWidth:"획 굵기",Text:"문자",StrokeColor:"획 컬러",TextColor:"문자 컬러",RemoveFilter:"필터 제거",SparklinesChartType:"차트 유형",SparklinesShowLastValues:"마지막 두 값의 열 보기",Green:"녹색",Red:"적색",SparklinesPositiveColor:"값이 증가한 경우",SparklinesShowDifference:"차이가 있는 열 보기",SparklinesShowLast:"지난 것 보기",StatisticalFunctions:"통계 기능",Forecast:"예측",ForecastTimeSeries:"시계열 예측",ForecastTimeSeriesErrorMsg:"시계열 예측에는 날짜 열이 필요합니다.",ForecastTimeSeriesConfiguration:"예측할 계절 길이와 기간 수를 선택합니다.",ForecastSeasonLength:"계절 길이",ForecastPeriodsToForecast:"예측 기간",ForecastIncludeBounds:"경계 포함",ForecastLinearRegression:"선형 회귀",ForecastLinearRegressionConfiguration:"선형 회귀 예측의 기간 수를 선택합니다.",ForecastLinearRegressionErrorMsg:"이 데이터에는 선형 회귀를 사용할 수 없으므로 문서를 확인해 주십시오.",ForecastDetectOutliers:"이상 값 검출",ForecastDetectOutliersErrorMsg:"이 데이터에는 이상 값 검출을 사용할 수 없으므로 문서를 확인해 주십시오.",MachineLearningModels:"기계 학습 모델",MachineLearningAzure:"Microsoft Azure",MachineLearningConfigureModel:"모델과의 연결 구성",MachineLearningURL:"Swagger 문서 URL",MachineLearningURLHint:"학습된 모델의 URL 예: https://ussoutcentral.services.azuerml.net...",MachineLearningPKHint:"이 키는 기본 소비자 정보에서 찾을 수 있습니다",MachineLearningPK:"API 키",AzureModelFieldsConfiguration:"Microsoft Azure 모델에서 필드 추가",Actions:"동작",Analytics:"분석",AuthenticationFail:"사용자 이름/비밀번호가 올바르지 않으므로 다시 시도해 보십시오.",AuthenticationNotNeededCopy:"이 연결은 인증이 필요하지 않습니다",CRM:"CRM",DatasourceNotInWeb:"데이터 소스가 현재 웹에 대해서는 구성되지 않습니다. 이 비주얼라이제이션을 보려면 iOS, Android 또는 데스크톱 버전을 사용하십시오.",Datastores:"데이터 저장소",DeleteDatasource:"데이터 소스 삭제",DownloadPdf:"PDF 다운로드",FailedDeleteAccount:"계정을 삭제하지 못했습니다",FailedSetAccount:"계정을 설정하지 못했습니다",LinkedDashboardNotFound:"연결된 대시보드를 찾을 수 없습니다",MixedContentDIYMessage:"혼합 콘텐츠: 호스트 페이지가 HTTPS를 통해 로드되었지만 안전하지 않은 DIY 시각화 '{0}' 을 (를) 요청했습니다. DIY 비주얼라이제이션은 HTTPS 를 통해 제공되어야 합니다.",NewVisualization:"신규 비주얼라이제이션",NoData:"표시할 데이터가 없습니다",SelectDataSourcePrimaryTitle:"데이터 소스 선택",ShowOriginal:"원본 보기",Social:"소셜",Sort:"정렬",Success:"성공",VerifyingConnectionResultSuccessful:"성공적으로 연결이 설정되었습니다!",CantTransposeData:"데이터를 바꿀 수 없습니다! 200 행까지 바꿀 수 있습니다.",AddNewDynamicsCRM:"신규 다이내믹스 CRM 추가",EditDynamicsCRM:"다이내믹스 CRM 편집",DynamicsCRMOrganization:"구성",ConfigureCRMConnection:"CRM 연결 구성",DynamicsCrmUrl:"URL",DynamicsCrmUrlHint:"URL",Credentials:"자격",AddCredentials:"인증 정보 추가",EditCredentials:"인증 정보 편집",Alias:"통칭",DynamicsCrmAllEntities:"모든 엔티티",DynamicsCrmOrganizationNotFound:"구성을 찾을 수 없음",DynamicsCrmCommonEntities:"인기 있는 엔터티",Paste:"붙여넣기",PasteToolTip:"비주얼라이제이션을 여기 또는 다른 대시보드에 붙여 넣을 수 있습니다",SparklinesNumberOfPeriods:"값 숫자",Export:"내보내기",Exporting:"내보내기",FetchingData:"데이터를 가져오는 중...",ContinueExport:"내보내기를 계속하시겠습니까?",ContinueExportMessage:"일부 시각화는 내보내기 파일에 영향을 줄 데이터를 표시하지 않습니다. 계속하거나 오류를 수정할 수 있습니다.",CancelExport:"내보내기 취소",NoDataForExport:"내보내기를 할 수 없음",NoDataForExportMessage:"이 대시보드에는 내보내기를 할 수 있는 데이터가 없습니다.",ExportAnyway:"강제로 내보내기",ExportErrorOnVisualization:"이 시각화의 데이터를 수집하는 동안 오류가 발생했습니다.",ExportFormatImage:"이미지",ExportFormatPDF:"PDF",ExportFormatPowerPoint:"PowerPoint",ExportFormatExcel:"엑셀",ExportImage:"이미지 내보내기",ExportPowerPoint:"PowerPoint로 내보내기",ExportExcel:"Excel로 내보내기",ExportPDF:"PDF 내보내기",ExportDashboard:"대시보드로 내보내기",ExportTitle:"형식 내보내기",Page:"페이지",Pages:"페이지",Slide:"슬라이드",Slides:"슬라이드",Portrait:"세로",Landscape:"가로",Orientation:"방향",Branding:"브랜딩",CustomBranding:"사용자 브랜딩",AddBranding:"브랜딩 추가",Company:"회사",Logo:"로고",NewCalcField:"신규 계산된 필드",CreateField:"필드 생성",ExpressionMustBeNumber:"식은 숫자를 반환해야 함",EnterFormula:"수식 입력",FieldName:"필드 이름",NameField:"필드 이름 지정",InDateRange:"날짜 범위에서",DateFilterSubtitleFormat:"년 월 일",DateFilterCustomRangeSubtitle:"{0} : {1}",EditCalcField:"계산된 필드 편집",Function:"기능",IsVisible:"표시 여부",UpdateFunction:"기능 업데이트",ChangeAggregation:"집합 변경",SetupCrm:"CRM 설정",AddAggregation:"집합 열 추가",Validating:"유효성 검사 중...",CalculatedField:"실패(x)",FieldNameInUse:"필드 이름은 이미 사용 중입니다",FieldNameInUseSubText:"다른 필드 이름을 입력하십시오",CopyToClipboard:"클립보드에 복사",CopyToClipboardErrorMessage:"클립보드에 저장할 수 없습니다",ToolTipPreviewData:"데이터 미리보기",ExportCancel:"내보내기가 취소됨",ExportFail:"내보내기를 실패했습니다",ExportSuccess:"내보내기에 성공했습니다",IncludeVisualization:"시각화 포함",IncludeVisualizationQuestion:"시각화를 포함하시겠습니까?",IncludeVisInclude:"포함",IncludeVisDontInclude:"포함하지 않음",DontIncludeIncludeVisualization:"시각화를 포함하지 않음",IncludeVisDiffSheets:"다른 시트에서",IncludeVisualizationOnDiffSheets:"다른 시트에 시각화 포함",DiscardAnnotatedChangesMessage:"저장되지 않은 주석을 삭제하시겠습니까?",SortByField:"정렬 기준",EnterText:"문자 입력",AskToClose:"닫으시겠습니까?",No:"아니요",YesContinue:"예, 계속하십시오.",NoCancel:"아니요, 취소합니다",Yes:"예",Dimensions:"규격",Measures:"측정",Cubes:"큐브",XmlaMoreFields:"더 많은 필드...",XmlaMeasureValues:"값",XmlaSets:"세트",SelectADate:"날짜 선택",PreviewData:"데이터 미리보기",ConfigureYourFilter:"필터 구성",XmlaDisplayElements:"표시된 요소",XmlaWithDataForMeasure:"측정 데이터가 있는 경우에만 표시",XmlaSelectDimensionHierarchyHint:"차원 또는 계층 선택",XmlaSelectDimensionHint:"규격, 계층 구조 또는 수준 선택",XmlaSelectMeasureHint:"측정 선택",SortByCaption:"캡션별로 정렬",IndicatorVisualizationCurrentValue:"현재 값",IndicatorVisualizationPreviousValue:"이전 값",IndicatorVisualizationTimePeriod:"시간 기간",IndicatorVisualizationGoalPeriod:"목표 기간",IndicatorVisualizationDifferenceMode:"차이 보기",CustomVisualization:"사용자 비주얼라이제이션",CustomVizHeaderSubText:"신규 비주얼라이제이션을 생성하거나 갤러리에서 시도해 봅니다",CustomVizUrlHeaderText:"신규 사용자 비주얼라이제이션",CustomVizUrlHintText:"HTML 비주얼라이제이션을 구현하는 URL",LoadHTML:"HTML 로딩",LoadVisualization:"비주얼라이제이션 로딩",Samples:"샘플",Custom:"사용자",CreateVisualization:"비주얼라이제이션 생성",VisualizationName:"비주얼라이제이션 이름",IndicatorNoticeLastDays:"어제 대 그제",IndicatorNoticeLastMonths:"지난 달 대 이전 달",IndicatorNoticeLastQuarters:"지난 분기 대 이전 분기",IndicatorNoticeLastYears:"지난 해 대 이전 해",IndicatorNoticeMonthToDatePreviousMonth:"대 이전 달",IndicatorNoticeMonthToDatePreviousYear:"대 지난해 같은 달",IndicatorNoticeQuarterToDatePreviousQuarter:"대 이전 분기",IndicatorNoticeQuarterToDatePreviousYear:"대 이전 해 같은 분기",IndicatorNoticeYearToDatePreviousYear:"대 이전 해",SampleTable:"샘플 테이블",USStates:"미국",WorldCountries:"세계 국가",LoadingPreview:"미리보기 로딩",CsvPreview:"CSV 미리보기",ExcelNamedRangePreview:"지정한 범위 미리보기",ExcelSheetPreview:"시트 미리보기",NotAllRowsShownCustomMessage:"%P 열. 처음 %@ 행 보기.",ODataEntityPreview:"엔터티 미리보기",ODataFunctionPreview:"기능 미리보기",HubspotEntityPreview:"객체 미리 보기",HubspotEntityPreviewMessage:"이 객체를 사용하려면 먼저 몇 가지를 설정해야 합니다",SqlProcedurePreview:"저장된 방법 미리보기",SqlTablePreview:"테이블 미리보기",SqlViewPreview:"미리보기 보기",DeleteVisualization:"비주얼라이제이션 삭제",UnnamedVisualization:"명명되지 않은 비주얼라이제이션",IndicatorVisualizationQuarter:"Q{0}",IndicatorVisualizationVersus:"대",MixedContentWarningMessage:"경고: HTTP를 통해 로딩된 호스트 페이지는 브라우저에 표시되지 않습니다. HTTPS를 사용하십시오",UpdateVisualization:"비주얼라이제이션 업데이트",SelectData:"데이터 선택",UrlAddedToClipboard:"URL이 클립보드에 복사됩니다!",AdvancedSelection:"상세 설정 선택",JSONTree:"제이슨 트리",ResultingTable:"결과 테이블",CreateTable:"테이블 생성",JsonEmptySubTitle:"1. 노드를 확장하여 제이슨 트리를 검색합니다\n2. 데이터를 선택할 가장 낮은 수준으로 이동합니다\n3. 안에서 선택을 사용하려면 요소를 선택합니다\n4. 더 열을 추가하기 위해 선택을 계속합니다",JsonEmptyTitle:"결과 테이블을 미리보기하기 위해 제이슨 트리에서 데이터를 선택합니다",DashboardThemes:"대시보드 테마",NavigateBack:"뒤로 탐색",TimeRange:"시간 범위",PreviewTable:"테이블 미리보기",ShowingFirstXRows:"첫 번째 %@ 행 보기",ShowingFirstXValues:"첫 번째 %@ 값만 보기",InvalidFormat:"무효한 형식",SuggestedTable:"추천 테이블",AddTablesManually:"+ 버튼을 사용해 테이블을 수동으로 추가",EditTable:"테이블 편집",NoTablesFound:"찾을 수 있는 테이블이 없음",ScanningFile:"파일 검색 중...",ErrorParsingJson:"제이슨 파일을 구문 분석하는 동안 문제가 발생했습니다.",TrailingTwelveMonths:"운용한 12개월",FormatToDate:"이 필드를 날짜/시간으로 포맷하시겠습니까?",CredentialsMessage:"자격 선택",DataSource:"데이터 소스",ConfigureDs:"%@ 에 로그인",CheckSelectedAccount:"올바른 계정을 선택했는지 확인해 주십시오",EmptyCredentials:"아직 생성된 자격이 없으십니까?",EmptyCredentialsMessage:"지금 추가하고 다중 데이터 소스에 사용합니다",CredentialsOnDeviceMessage:"나중에 접근할 수 있도록 자격이 암호화되어 이 장치에 저장되는 점에 유의하십시오.",CredentialsOnServerMessage:"인증 정보는 암호화되어 나중에 액세스할 수 있도록 서버에 저장됩니다.",UseCredentialsMessage:"다른 데이터 소스에서 이 자격을 사용합니다",SuccessfulDeleteAccount:"계정 삭제 성공",CalculatedFieldText:"계산된 필드",DataBlending:"데이터 블렌딩",DSBlendInstruction1:"1. 데이터 소스에 연결하는 데 사용할 필드를 선택합니다",DSBlendInstruction2:"2. 포함할 필드를 선택합니다",FieldsFromAnotherDatasource:"다른 데이터 소스의 필드",JoinData:"데이터 연결",JoinDataSources:"데이터 소스 연결",DiscardUnsavedChanges:"계속하기를 선택하면 저장되지 않은 변경이 손실됩니다",DSBlendAddRowMsg:"+ 다른 행 추가",DSBlendFromSourceMsg:"%@에서",DeleteJoinedDataSource:"연결된 데이터 소스 삭제",DashboardDeleted:"이 대시보드는 다른 사용자에 의해 삭제되었습니다.",DashboardEdited:"이 대시보드는 다른 사용자에 의해 편집되었습니다.",DashboardModified:"이 대시보드는 다른 사용자에 의해 수정되었습니다.",CreatedBy:"생성자",AddNewRESTAPI:"신규 REST API 추가",Body:"보디",ConfigureRESTAPI:"중괄호를 사용하여 URL에 API 인수를 표시합니다. 예: \nhttp://www.google.com/{name}?id={id}",ContentType:"ContentType",ResultType:"결과 유형",EditRESTAPI:"REST API 편집",Header:"헤더",Method:"메소드",ParametersAndData:"매개 변수 및 데이터",OAuthCredentialsInvalidUrl:"무효한 url: {0}",CredentialType:"인증 정보 유형",GenericCredential:"일반 자격",AwsCredential:"AWS 인증 정보",OAuthAccountDetails:"OAuth 2/OIDC 계정 세부",OAuthAdditionalParameters:"추가 매개 변수",OAuthAuthenticateUrl:"인증 URL",OAuthClientId:"클라이언트 ID",OAuthClientSecret:"클라이언트 비밀",OAuthCredential:"OAuth 2/OIDC 자격",OAuthLogoutUrl:"로그 아웃 URL",OAuthResource:"리소스",OAuthScope:"범위",OAuthTokenUrl:"토큰 URL",AccountDeleteErrorMessage:"계정을 삭제할 수 없습니다",Key:"키",SelectAKey:"키 선택...",DSBlendingUnsupportedSubTitle:"선택한 데이터 소스를 현재 블렌딩에 사용할 수 없습니다",DSBlendingUnsupportedTitle:"다른 데이터 소스를 선택하십시오",RestPreview:"REST 미리보기",OAuth:"OAuth 2/OIDC",Modify:"수정",DeleteBody:"보디 삭제",DeleteHeader:"헤더 삭제",GenericOAuthSignInPopupBlocked:"로그인 창이 열리지 않았습니다. 브라우저의 팝업 관리 설정을 다시 확인하여 이 사이트에서 팝업이 허용되는지 확인하십시오.",GenericOAuthWaitingSigninPopup:"로그인이 완료될 때까지 기다리는 중입니다.",OAuthRedirectUrlInfo:"OAuth 클라이언트 정의에 다음의 리디렉션 URL을 등록해야 합니다:",TimeFormat:"시간 형식",FormatToNumber:"이 필드를 숫자로 포맷하시겠습니까?",SampleData:"샘플 데이터",ConfirmRemoveField:"필드 제거 확인",ConfirmRemoveFieldQuestion:"이 필드는 현재 하나 이상의 대시보드에 연결하는 데 사용됩니다. 대시보드 링크는 설정/연결에서 검토할 수 있습니다.",DataItemsSDK:"데이터 항목",DataStoresSDK:"데이터 저장",NewDashboard:"신규 대시보드",NoDataSourcesSDK:"사용 가능한 데이터 소스가 없습니다",SearchEllipsis:"검색...",SelectDataForFilter:"이 필터에 사용할 데이터를 선택합니다",HelpDataSource:"데이터 소스 도움말",HelpDashboardEditor:"대시보드 편집기 도움말",NotSet:"설정되지 않음",Table:"테이블",ProviderCannotBeDetected:"공급자를 찾을 수 없습니다",SelectTableForFilter:"이 필터에 사용할 데이터가 있는 테이블을 선택합니다",SaveBeforeExport:"대시보드를 내보내기 전에 변경 사항을 저장하십시오.",UnsavedChangesFound:"저장되지 않은 변경 사항이 있음",Loading:"로딩...",LoadingMayTakeTime:"로딩... 몇 분이 소요될 수 있습니다",OrLower:"또는",Target:"타깃",Medium:"중간",ShowTotalsOnTooltip:"도구 설명에 합계 표시",Total:"합계",RevealSDKTrial:"공개 SDK 평가판",SignInUnexpectedAccount:"승인에 사용된 계정이 데이터를 요청한 계정과 일치하지 않습니다. 다시 시도하여 적절한 계정을 선택해 주십시오.",GenericRequestError:"이 요청은 예기치 않은 오류로 인해 실패했습니다. 일시적인 문제일 수 있으므로 다시 시도해 보시기 바랍니다. 해결되지 않는 경우에는 지원센터에 문의해 주십시오.",AddValue:"값 추가",AddGAnalyticsProperty:"Google 애널리틱스 속성 추가",SelectGAAccount:"Google 애널리틱스 계정 선택",SelectProperty:"%@ 속성 선택",NoXFound:"%@ 을 (를) 찾을 수 없습니다",NoGAAccount:"%@ 에는 연결된 Google 애널리틱스 계정이 없습니다.",AddDescription:"설명 추가",UseRightAxis:"오른쪽 축 사용",Chart1:"차트 1",Chart2:"차트 2",Style:"스타일",YAxisLeft:"Y축(왼쪽)",YAxisLeftBounds:"Y축(왼쪽) 경계",YAxisRight:"Y축(오른쪽)",YAxisRightBounds:"Y축(오른쪽) 경계",NoLimit:"제한 없음",ChartOnTop:"상단 차트",DateRange:"날짜 범위",NewTextbox:"새로운 텍스트 상자",Textbox:"텍스트 상자",EditTextbox:"텍스트 상자 편집",TextboxViz:"텍스트 상자 시각화",GoogleAnalyticsSegments:"Google 애널리틱스 세그먼트",GoogleAnalyticsSelectSegments:"사용하려는 세그먼트를 선택합니다",GoogleAnalyticsSegment:"세그먼트",TextSize:"텍스트 크기",XAxis:"X축",YAxis:"Y축",AddNewSSRS:"새로운 Microsoft 리포팅 서비스 추가",EditSSRS:"Microsoft 리포팅 서비스 편집",SelectReport:"보고서 선택",ShowTotalsOnTooltipSubtitle:"카테고리가 있을 때 표시됩니다",ShowZeroValuesInLegend:"범례에 0값 표시",LoadAsPdf:"PDF 로 로드",ReportPreview:"보고서 미리 보기",ReportFalse:"거짓",ReportTrue:"참",ReportingServicesPreview:"보고서 서비스 데이터 미리 보기",ReportingMultipleValues:"여러 값 선택",BigQueryAddDataset:"Google BigQuery 데이터 세트 추가",BigQuerySelectDataset:"'%@' 프로젝트에서 데이터 세트 선택",BigQuerySelectProject:"프로젝트 선택",BigQueryProjects:"프로젝트",NoBigQueryProjects:"'%@' 계정과 연결된 프로젝트가 없습니다",AddNewAzureSQL:"새로운 Azure SQL 데이터베이스 추가",AddNewAzureSynapse:"새로운 Azure Synapse 데이터베이스 추가",EditAzureSQL:"Azure SQL 데이터베이스 편집",EditAzureSynapse:"Azure Synapse 데이터베이스 편집",ForecastingMinSeasonLength:"계절 길이는 %@보다 커야 합니다",ForecastingNotEnoughValues:"값이 충분하지 않으며 두 계절분의 데이터가 필요합니다",PostTransformationEmptyResult:"빈 결과",PostTransformationInvalidVisualization:"무효한 시각화",PostTransformationSingleMeasureRequired:"단일 측정 필요",ReportingSetUp:"보고서 설정",EditMLServiceConnection:"연결 편집",EditMLServiceParameters:"매개 변수 편집",MLSelectAField:"필드 선택",MLSelectANumericField:"숫자 필드 선택",MLSelectADateTimeField:"날짜/시간 필드 선택",Tools:"도구",DrillDownTo:"%@ (으) 로 드릴다운",DrillUpTo:"%@ (으) 로 드릴업",BigQueryAccountErrorHeader:"프로젝트를 찾을 수 없습니다",BigQueryAccountErrorMessage:"%@ 에는 연결된 BigQuery 프로젝트가 없습니다.",BigQueryDataErrorHeader:"데이터 세트를 찾을 수 없습니다",BigQueryDataErrorMessage:"%@ 에는 연결된 데이터 세트가 없습니다.",GoogleAnalyticsAccountErrorHeader:"계정을 찾을 수 없습니다",GoogleAnalyticsAccountErrorMessage:"%@ 에는 연결된 Google 애널리틱스 계정이 없습니다.",GoogleAnalyticsDataErrorHeader:"속성을 찾을 수 없습니다",GoogleAnalyticsDataErrorMessage:"%@ 에는 연결된 속성이 없습니다.",CubicFit:"큐빅 피팅",CumulativeAverage:"누적 평균",ExponentialAverage:"지수 평균",ExponentialFit:"지수 피팅",LinearFit:"선형 피팅",LogarithmicFit:"대수 피팅",ModifiedAverage:"수정된 평균",PowerLawFit:"멱함수 적합",QuadraticFit:"2 차 피팅",QuarticFit:"4 차 피팅",SimpleAverage:"단순 평균",WeightedAverage:"가중 평균",ForecastTimeSeriesNotEnoughDataErrorMsg:"시계열 예측을 위한 데이터가 충분하지 않으며 최소 8개의 값이 필요합니다.",DownloadRevealDesktop:"Reveal Desktop 다운로드",ScriptNotSupported:"이 플랫폼에서 스크립트된 시각화는 지원되지 않습니다.",ScriptUseDesktop:"Reveal Desktop 을 사용하여 이 시각화를 봅니다",DataLanguage:"데이터 언어",GrandTotal:"총계",SalesforceAllObjects:"모든 객체",SalesforceCommonObjects:"인기 있는 객체",MachineLearningBigQuery:"Google BigQuery ML",BigQueryModels:"모델",MachineLearningSelectBigQueryModel:"모델 선택",ScriptSettings:"스크립트",BigQueryModelFieldsConfiguration:"BigQuery 모델의 필드 추가",ChangeBigQueryModel:"모델 변경",DataDotWorldAccountErrorHeader:"데이터 세트를 찾을 수 없습니다",DataDotWorldAccountErrorMessage:"%@ 에는 연결된 data.world 데이터 세트가 없습니다.",DataDotWorldAddDataset:"data.world 데이터 세트 추가",DataDotWorldDatasets:"데이터 세트",NoDataDotWorldDatasets:"'%@' 계정이 소유하거나 기여한 데이터 세트가 없습니다",BigQueryLearnCreateModel:"모델의 작성 방법을 소개해 드립니다.",BigQueryNoModelsAvailable:"사용 가능한 모델이 없습니다.",AutoDetect:"자동 검출",Others:"기타",ToolTipZoomLevel:"줌 레벨",ShowValues:"값 표시",ColorAs:"색상",ColorBasedOn:"색상 기반",RangeOfValues:"값 범위",HighestValue:"최고값",Labels:"라벨",LabelsAre:"라벨은",LegendNoData:"데이터 없음",LocationAbbreviation:"위치 약칭",LocationFullName:"위치 전체 이름",LowestValue:"최저값",MapColor:"지도 색상",OnlyWhenHasValues:"값이 있는 경우에만",ShowLabels:"라벨 표시",SingleColor:"단색",AddDataSourceTitle:"새로운 %@ 추가",EditDataSourceTitle:"%@ 편집",LegendOfTotal:"총계",LegendTie:"묶음",AvailableMaps:"사용 가능한 지도",LabelsNotSupported:"이 지도는 라벨을 지원하지 않습니다",ForExample:"예:",LocationNeeds:"이 지도의 경우, LOCATION 에 %@ 이름이 필요합니다",MapNoDataError:"표시할 데이터가 없습니다.",MapNoDataErrorShort:"데이터 없음",AzureASAuthenticateInOtherPlatform:"Azure 분석 서비스 인증은 iOS, Android, 데스크톱 버전의 Reveal 에서 실행해야 합니다. https://www.revealbi.io/app 를 방문하여 원하시는 플랫폼에서 앱을 다운로드해 주십시오.",SharedFileAccessFailed:"공유 파일 %@ 에 액세스할 수 없습니다",MapNotFoundError:"선택한 지도는 더 이상 사용할 수 없습니다",MapNotFoundErrorShort:"지도를 찾을 수 없습니다",SqlFunctions:"기능",SalesforceAllReports:"보고서",SelectAParameter:"매개 변수 선택",IndicatorIncludeToday:"오늘 포함",SqlFunctionParamsMessage:"이 기능을 사용하려면 먼저 몇 가지 사항을 설정해야 합니다",SqlFunctionPreview:"기능 미리보기",SetupHubSpot:"HubSpot 데이터 설정",LoadingWorkgroups:"워크그룹 로드",SalesForceParamsMessage:"이 보고서를 사용하려면 먼저 몇 가지를 설정해야 합니다",SalesForceReportPreview:"보고서 미리 보기",QuickBooksAllEntities:"모든 엔티티",QuickBooksCommonEntities:"공통 엔티티",QuickBooksScreenTitle:"QuickBooks 데이터 설정",NoCredentialsConfigured:"선택한 데이터 소스에 설정된 인증 정보가 없습니다",SQLNoDatabaseSelected:"데이터베이스 선택",SQLNoDatabasesFound:"데이터베이스가 없습니다",SQLNoDataCatalogFound:"데이터 카탈로그를 찾을 수 없습니다",SQLNoDatabasesFoundSubtitle:"연결 설정을 확인해 주십시오",SSASNoCatalogSelected:"카탈로그 선택",Language:"언어",LanguageOfDataSettingSubText:"데이터가 작성된 언어",LanguageOfDataSettingText:"데이터가 작성되었습니다",SSASCatalogNotFound:"카탈로그 '%@' 을 (를) 찾을 수 없습니다",AddImages:"이미지 추가",AddImagesMessage:"첨부할 것의 스크린샷을 찍습니다",ExportImages:"이미지 내보내기",ServerSideAggregation:"서버에서 데이터 처리",ServerSideAggregationDesc:"이것은 대용량 데이터에 가장 적합합니다.",ServerSideAggregationTooltip:"데이터는 GROUP BY 쿼리에 의해 서버 측 (데이터베이스 서버 내) 에서 집계됩니다.",ServerSideAggregationFeatureDisabledMessage:"서버에서 데이터 처리 옵션을 사용하는 경우에는 기계 학습 모델 및 혼합 데이터는 이 구성에서 작동하지 않습니다.\n\n이러한 기능을 사용하려면 아래의 서버에서 데이터 처리 옵션을 선택 취소해 주십시오.\n",ServerSideAggregationFeatureDisabledTitle:"이 기능을 사용할 수 없습니다",ServerSideAggregationCalculatedMessage:"서버에서 데이터 처리를 사용하는 경우에는 일부 기능을 사용할 수 없습니다.\n\n모든 기능을 사용할 수 있도록 하려면 아래 옵션을 선택 취소해 주십시오.\n",ServerSideAggregationCalculatedTitle:"제한된 기능 목록",UseDifferentMarkers:"다른 마커 사용",UseImageTiles:"이미지 타일 사용",WhenZoomLevelIs:"줌 레벨인 경우",ServerSideAggregationEnableMessage:"대용량 데이터 세트의 경우, 서버에서 데이터 처리 옵션을 사용하는 것이 좋습니다.\n\n활성화하려면 아래 옵션을 선택해 주십시오.\n",ServerSideAggregationEnableTitle:'"서버에서 데이터 처리" 기능을 활성화합니다',ServerSideAggregationRestrictedFunctionsBannerMessage:"서버에서 데이터 처리 옵션을 사용하고 있습니다. 일부 기능을 사용할 수 없습니다. %@",ServerSideAggregationRestrictedFunctionsBannerTrigger:"이러한 것을 사용하려면 서버에서 데이터 처리를 비활성화해 주십시오.",SlowRequestBannerMessage:"데이터 로딩에 너무 많은 시간이 걸립니다. 서버에서 데이터를 처리함으로써 더 빠르게 로딩할 수 있습니다. %@",SlowRequestBannerTrigger:'"서버에서 데이터 처리" 기능을 활성화합니다.',UseMetadata:"메타데이터 사용",EditMarketo:"Marketo 편집",AddNewMarketo:"새로운 Marketo 데이터 소스 추가",SetupMarketo:"Revenue Explorer 데이터 설정",MarketoEntityPreview:"분석 영역 미리 보기",MarketoParametersMessage:"이 시각화의 날짜 범위를 선택합니다",AddNewRedshift:"새로운 Redshift 데이터베이스 추가",EditRedshift:"Redshift 편집",RangeDateUnder31DaysError:"기간은 31일을 초과하지 않아야 합니다",RangeDateFromGreaterToError:"시작일은 종료일보다 이전이어야 합니다",FiscalYearExpression:"FY %@",AddNewAthena:"새로운 AWS Athena 데이터 소스 추가",AthenaUrlHint:"예: s3://query-results-bucket/folder/",EditAthena:"AWS Athena 편집",QueryResultLocation:"쿼리 결과 위치",Workgroup:"워크그룹",AthenaDataSource:"Athena 데이터 소스",AthenaNoDatabasesFoundSubTitle:"선택한 데이터 카탈로그에 데이터베이스가 없습니다",OriginalFieldName:"본래 필드 이름: %@",ClickToConfigure:"클릭하여 구성",Configure:"구성",TurnOnTileProvider:"이 지도는 의도한 대로 표시되지 않습니다. 타일 제공자를 설정하여 이미지 타일을 켤 수 있습니다.",Background:"배경",AddNewSnowflake:"새로운 Snowflake 추가",EditSnowflake:"Snowflake 편집",SnowflakeAccount:"계정",SnowflakeAccountHint:"예: 계정은 XXX.us-east-1 이 아닌 XXX 여야 합니다",SnowflakeHost:"호스트",SnowflakeHostHint:"예: XXX.us-east-1.snowflakecomputing.com",AddDateHierarchy:"날짜 추가",GoogleAdsAccountErrorMessage:"계정 정보를 가져오는 동안 오류가 발생했습니다.",GoogleAdsAddAccount:"Google 광고 계정 선택",GoogleAdsErrorHeader:"Google 광고 오류",GoogleAdsNoAccount:"%@ 에는 연결된 Google 광고 계정이 없습니다.",GoogleAdsAllResources:"모든 리소스",GoogleAdsPopularResources:"인기 있는 리소스",DataBlendingNotSupported:"이 제공자는 블렌딩을 지원하지 않습니다",FileNotFound:"파일을 찾을 수 없습니다",Time:"시간",ResetZoom:"줌 재설정",ZoomIn:"확대",ZoomOut:"축소",CompactLabels:"콤팩트 라벨 (미리 보기)",Databases:"데이터베이스",MarketingSalesCrm:"마케팅, 영업, CRM",SocialMedia:"소셜 미디어",BigDataStorages:"대용량 데이터 저장소",FromWeb:"웹에서",SpreadSheetsDescription:"XLS, CSV, Google Sheets 에 직접 연결합니다.",DatabasesDescription:"쿼리, 테이블 등에 연결합니다.",AzureSSASDescription:"엔터프라이즈급 데이터 모델에 연결합니다.",AzureSynapseDescription:"분석 서비스에 연결합니다.",SSASDescription:"모든 분석 데이터베이스에 연결합니다.",SSRSDescription:"서버 기반 보고서에 연결합니다.",MarketingDescription:"마케팅 자동화에 연결합니다.",CRMDescription:"CRM 데이터에 연결합니다.",FacebookDescription:"Facebook 인사이트에 연결합니다.",InstagramDescription:"Instagram 인사이트에 연결합니다.",LinkedInDescription:"LinkedIn 인사이트에 연결합니다.",TwitterDescription:"Twitter 인사이트에 연결합니다.",ODataDescription:"Open Data Protocol을 사용하여 콘텐츠와 파일을 가져옵니다.",GoogleAnalyticsDescription:"웹 분석에 직접 연결합니다.",GoogleAdsDescription:"온라인 광고에 연결합니다.",GoogleBigQueryDescription:"서버리스 데이터 웨어하우스에 연결합니다.",QuickBooksDescription:"회계 소프트웨어에 연결합니다.",WebResourceDescription:"URL 에서 파일 및 콘텐츠를 사용합니다.",RestApiDescription:"REST 를 사용하여 추가 소스에 연결합니다.",SharePointDescription:"SharePoint 목록 및 라이브러리에 대한 정보를 얻습니다.",AthenaDescription:"모든 서버리스 쿼리에 연결합니다.",RedshiftDescription:"클라우드 데이터 웨어하우스에 연결합니다.",SnowflakeDescription:"모든 클라우드 기반 데이터에 연결합니다.",SQLServerShortKey:"Microsoft SQL",SSASProviderShortKey:"Microsoft SSAS",SSRSProviderShortKey:"Microsoft SSRS",AzureSQLProviderShortKey:"Azure SQL",AzureAnalysisServicesShortKey:"Azure SSAS",DynamicsCRMProviderShortKey:"Microsoft Dynamics",AzureSynapseProviderShortKey:"Azure Synapse",DataFiles:"데이터 파일",RevealMetadataDescriptionHint:"이 데이터의 컨텍스트를 설명합니다",GoogleAdsShows:"보기",SQLDatabaseNotFound:"데이터베이스 '%@'을(를) 찾을 수 없습니다",BlendingWithSameDatasourceOnly:"제공자 '%@' 의 테이블은 동일한 데이터 소스에서 가져온 테이블과만 블렌딩할 수 있습니다.",ToConnect2XSetupFirst:"%@ 데이터에 연결하려면 먼저 몇 가지를 설정해야 합니다",ShowMeHow:"방법 보기",CopyToClipboardFirefoxMessage:"Firefox 의 클립보드에의 액세스는 현재 비활성화되어 있습니다. 활성화하려면 환경 설정으로 이동하여 dom.events.asyncClipboard.clipboardItem 을 적용으로 설정해 주십시오. Firefox 의 환경 설정을 변경하려면 about:config 에 접속해 주십시오.",OriginalWithDataType:"원본: %1 (%2)",SalesForceMarketingCloudAddAccount:"새로운 세일즈포스 마케팅 클라우드 추가",SalesForceMarketingCloudTenantSubdomain:"테넌트 서브도메인",RevealMetadataOverrideFormatting:"재정의",RevealMetadataExampleFormattedValue:"예: %@",SalesforceMarketingCloudDescription:"마케팅 자동화 지표에 연결합니다.",SalesforceMarketingCloudShortTitle:"마케팅 클라우드",OriginalWithoutDataType:"원본: %@",BackgroundColor:"배경색",FromDateParameter:"시작일 매개 변수",ToDateParameter:"종료일 매개 변수",ParameterMappedToDateFilter:"날짜 필터에 매핑",SearchByName:"이름으로 검색",RefreshAfterMinutes:"%@ 분 후",RefreshByMinute:"1 분에 한 번",GoogleSearchDescription:"웹 사이트 검색 트래픽에 연결합니다.",SyncAxisVisibleRange:"가시 범위로 축 동기화",AutomaticLabelRotation:"자동 라벨 회전",CombineValuesOther:"보다 작은 값 결합",ShowsAsOthers:'"기타" 로 표시',ShowAllSlices:"모든 슬라이스 표시"};
//# sourceMappingURL=infragistics.langpack.ko.js.map